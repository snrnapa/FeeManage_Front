import { Button } from '@mui/base';
import React from 'react'
import { useRef } from 'react';
import { Input } from '@mui/material';
import Title from './Title';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';

const InputWorker = (props) => {

    const {refflg , setRefflg} = props;
    const idRef = useRef(null);
    const first_nameRef = useRef(null);
    const last_nameRef = useRef(null);
    const deptRef = useRef(null);
    const teamRef = useRef(null);


    const handleSubmit = (e) => {
        e.preventDefault();



        const requestOptions ={
            method: 'POST',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: idRef.current.value,
                first_name: first_nameRef.current.value,
                last_name: last_nameRef.current.value,
                dept: deptRef.current.value,
                team: teamRef.current.value
            })

            };
            fetch('http://localhost:8080/',requestOptions)
            setRefflg(refflg + 1);

        }





    function workerinsert(){

        const requestOptions ={
            method: 'POST',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({
                "id":16,
                "first_name":"pepepe",
                "last_name":"pepepe",
                "dept":"HHB",
                "team":"UUY"
            
            })



    
            };
            fetch('http://localhost:8080/',requestOptions)



    }



  return (

    <>

    <Title>User Input <PersonAddAltIcon fontSize='large' /> </Title>




    {/* <Button onClick={(worker) => workerinsert(props)}>送信</Button> */}

    <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="id">ID:    </label>
          <Input id="id" name="id" inputRef={idRef} />
        </div>

        <div>
          <label htmlFor="first_name">First_Name:    </label>
          <Input
            id="first_name"
            name="first_name"
            inputRef={first_nameRef}
            type="first_name"
          />
        </div>



        <div>
          <label htmlFor="last_name">last_Name:    </label>
          <Input
            id="last_name"
            name="last_name"
            inputRef={last_nameRef}
            type="last_name"
          />
        </div>

        <div>
          <label htmlFor="dept">dept:    </label>
          <Input
            id="dept"
            name="dept"
            inputRef={deptRef}
            type="dept"
          />
        </div>


        <div>
          <label htmlFor="team">team:    </label>
          <Input
            id="team"
            name="team"
            inputRef={teamRef}
            type="team"
          />
        </div>


        <div>
          <button type="submit">ログイン</button>
        </div>
      </form>

  </>



  )
}

export default InputWorker