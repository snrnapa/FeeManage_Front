function Register() {
  return (
    <>
      <form action="https://localhost:8080" method="GET">
        <div className="Register">
          <label htmlFor="name">Name (4 to 8 characters):</label>
          <input
            type="text"
            id="name"
            name="name"
            required=""
            minLength={4}
            maxLength={8}
            size={10}
          />
        </div>
        <div className="submit-btn">
          <input type="submit" defaultValue="登録" className="btn" />
        </div>
      </form>
    </>
  );
}

export default Register;
