import { useEffect, useRef, useState } from "react"
import {type Todo as TodoType, type TodoId } from "../types"

interface Props extends TodoType {
    onToggleCompleteTodo:({
        id, 
        completed
    }: Pick<TodoType, "id" | "completed">) => void
    setCompleted: (id: string, completed: boolean) => void
    setTitle: (params: {id, title:string}) => void
    isEditing: string
    setIsEditing: (completed: string) => void
    onRemoveTodo: (id: TodoId) => void
}


export const Todo: React.FC<Props> = ({ 
    id, 
    title, 
    completed,
    setCompleted,
    setTitle,
    isEditing,
    setIsEditing,
    onRemoveTodo, 
    onToggleCompleteTodo
}) => {
    const handleChangeCheckBox = (e: React.ChangeEvent<HTMLInputElement>): void => {
        onToggleCompleteTodo({
            id,
            completed: e.target.checked
        })
    
    const [editedTitle, setEditedTitle] = useState(title)
    const inputEditedTitle = useRef<HTMLInputElement>(null)

    const handleSubmit: React.KeyboardEventHandler<HTMLInputElement> = e => {
        if (e.key === "eEnter") {
            setEditedTitle(editedTitle.trim())

            if (editedTitle != title) {
                setTitle({id, title: editedTitle})
            }

            if (editedTitle === "") onRemoveTodo(id)
            setEditedTitle("")
        }

    }
    }
    return (
        <div className="view">
            <input 
                className="toggle"
                checked={completed}
                type="checkbox"
                onChange={handleChangeCheckBox}
            />
            <label>{title}</label>
            <button 
                className="destroy"
                onClick={() => {
                    onRemoveTodo({id})
                }} 
            />
        </div>
    )
}