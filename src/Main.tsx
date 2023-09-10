import React, {useState} from 'react';
import {
    FlatList,
    ListRenderItem,
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
} from "react-native";

type TaskType = {
    key: string
    title: string
    isDone: boolean
}
export const Main = () => {
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
    const render: ListRenderItem<TaskType> = ({item}) => {
        return (
            <View>
                <TouchableOpacity
                    style={[styles.item, {opacity: item.isDone ? 0.5 : 1}]}
                    onLongPress={()=> removeTasks(item.key)}
                    onPress={()=> updateTask(item.key)}
                >
                    <>
                        <Text style={[styles.title, {textDecorationLine: item.isDone ? 'line-through' : 'none'}]}>{item.title}</Text>
                        <Text>{item.isDone ? 'true' : 'false'}</Text>
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
        setTasks(tasks.filter(el=> el.key !== key))
    }
    const updateTask = (key: string)=>{
        setTasks(tasks.map(el=> el.key === key ? {...el, isDone: !el.isDone} : el))
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