import React from 'react'

const Update = () => {
  const handleSubmit = (e) => {
    e.preventDefault()

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: idRef.current.value,
        atdate: atdateRef.current.value,
        location: locationRef.current.value,
        workstart: workstartRef.current.value,
        workend: workendRef.current.value,
        reststart: reststartRef.current.value,
        restend: restendRef.current.value,
      }),
    }
    fetch('http://localhost:8080/report', requestOptions)
    setRefflg(refflg + 1)
  }
  return <div></div>
}

export default Update
