function ErrorMessage({ query }) {
    return (
        <h2>Sorry no movies exist in the database from '${query}' search</h2>
    )
}

export default ErrorMessage