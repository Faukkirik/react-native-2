import React, {useCallback, useState} from 'react';
import {
    FlatList,
    ListRenderItem,
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity, RefreshControl,
} from "react-native";
import {MemoSvgComponent} from "./svg/MySvg";
import {MemoSvgDay} from "./svg/SvgDay";


type TaskType = {
    key: string
    title: string
    isDone: boolean
}
const wait = (timeout: any) => {
    return new Promise(resolve => setTimeout(resolve, timeout))
}
export const Main = () => {
    const [refreshing, setRefreshing] = useState<boolean>(false)

    const [tasks, setTasks] = useState<TaskType[]>([
        {
            key: '1',
            title: 'HTML',
            isDone: true,
        },
        {
            key: '2',
            title: 'React',
            isDone: true,
        },
        {
            key: '3',
            title: 'React-native',
            isDone: false,

        }
    ])
    const [title, setTitle] = useState<string>('')
    const onRefresh = useCallback(() => {
        setRefreshing(true)
        wait(2000).then(() => setRefreshing(false))
    }, [])
    const render: ListRenderItem<TaskType> = ({item}) => {
        return (
            <View>
                <TouchableOpacity
                    style={[styles.item, {opacity: item.isDone ? 0.5 : 1}]}
                    onLongPress={() => removeTasks(item.key)}
                    onPress={() => updateTask(item.key)}
                >
                    <>
                        <Text
                            style={[styles.title, {textDecorationLine: item.isDone ? 'line-through' : 'none'}]}>{item.title}</Text>
                        <Text style={{paddingRight: 30}}>{item.isDone ? 'true' : 'false'}</Text>
                        <MemoSvgComponent
                            style={{position: 'absolute', bottom: 3, right: 2}}
                            onPress={() => removeTasks(item.key)}
                        />
                        <MemoSvgDay style={{position: 'absolute', bottom: 15, right: 100}}/>
                    </>
                </TouchableOpacity>
            </View>
        )
    }
    const addTask = () => {
        const newTask: TaskType = {
            key: `${title}.${tasks.length + 1}`,
            title,
            isDone: false,
        }
        setTasks([newTask, ...tasks])
        setTitle('')
    };
    const removeTasks = (key: string) => {
        setTasks(tasks.filter(el => el.key !== key))
    }
    const updateTask = (key: string) => {
        setTasks(tasks.map(el => el.key === key ? {...el, isDone: !el.isDone} : el))
    }
    const renderHeader = () => {
        return (
            <View style={styles.header}>
                <TextInput style={styles.input} value={title} onChangeText={setTitle}/>
                <TouchableOpacity onPress={addTask}>
                    <Text>ADD</Text>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View>
            <View style={styles.header}>
                <TextInput style={styles.input} value={title} onChangeText={setTitle}/>
                <TouchableOpacity onPress={addTask}>
                    <Text>ADD</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={tasks}
                renderItem={render}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
                //ListHeaderComponent={renderHeader}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#e1b0b0',
        paddingHorizontal: 10,
        paddingVertical: 5,
        flexDirection: "row",
        justifyContent: 'space-between',
        marginVertical: 5,
        borderWidth: 1,
        borderRadius: 5,
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        letterSpacing: 3,
    },
    input: {
        width: 200,
        height: 30,
        borderWidth: 1,
        borderRadius: 5,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 15,
    }
})