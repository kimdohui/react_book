import React, {useRef, useCallback, useState} from 'react';
import produce from 'immer';

const App = () => {
  const nextId = useRef(1);

  const [form , setForm] = useState({name : '', username : ''});
  const [data, setData] = useState({
    array : [],
    uselessValue : null});

    const onChange = useCallback(e => {
      setForm(produce(form ,draft => {
        draft[name] = value;
      }));
    }, []);

    const onSubmit = useCallback(
      e => {
        e.preventDefault();
        const info = {
          id : nextId.current,
          name : form.name,
          username : form.username
        };

        setData(produce(data,draft => {
          draft.array.push(info);
        }));

        setForm({name :'', username:''});
        nextId.current += 1;
      },
      [form.name , form.username]
    );

    const onRemove = useCallback(
      id => {
        setData(
          produce(data,draft => {
            draft.array.splice(draft.array.findIndex(info => info.id === id), 1);
          })
        );
      },[]
    );
      return(...);
}

export default App;