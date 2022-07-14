import * as C from './styles';
import { item } from '../../types/Item';

type Props = {
    item: item,
    onChange: (id: number, done: boolean) => void
    onTrash:( taskId:number) => void
}

export const ListItem = ({ item, onChange, onTrash}: Props) => {
    const removeNote = (id: number)=>{
        document.getElementById(id.toString())?.remove();
        onTrash(id);
    }

    return (
        <C.Container done={item.done}>
            <input
                type="checkbox"
                checked={item.done}
                onChange={e => onChange(item.id, e.target.checked)}
            />
            <label>{item.name}</label>
            <div 
                id={item.id.toString()} 
                className='image' 
                onClick={e => removeNote(item.id)}>
                    🗑️
                </div>
        </C.Container>
    );
}