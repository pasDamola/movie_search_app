function ErrorMessage({ query }) {
    return (
        <h2 className="error">Sorry no movies exist in the database from '{query}' search</h2>
    )
}

export default ErrorMessage