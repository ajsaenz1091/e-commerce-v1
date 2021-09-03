
const Errors = ({errors}) => {


    const renderErrors = () => {
        return errors.map(error => <p><ol>{error}</ol></p>)
    }


    return(
        <div>
            {renderErrors()}
        </div>
    )

}

export default Errors