const Transaction = ({ params : { id } }) =>{ //! o param tem que ter o mesmo nome dir que estah entre colchetes [id], ou seja, 'id'
    return(
        <h1>Transaction: {id} </h1>
    )
}

export default Transaction