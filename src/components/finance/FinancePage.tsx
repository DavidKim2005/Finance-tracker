import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useEffect } from "react";
import { fetchTransactions } from "../../store/transactionsThunks";
import { fetchCategories } from "../../store/categoriesThunks";
import HeaderNav from "../HeaderNav";


const FinancePage = () => {
    const dispatch = useAppDispatch();
    const transactions = useAppSelector(state => state.transactions.data);
    const categories = useAppSelector(state => state.categories.data)

    

    useEffect(() => {
        dispatch(fetchTransactions());
    }, [dispatch]);

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    const getCategoryName = (categoryId) => {
        const category = categories.find(category => category.id === categoryId);
        return category ? category.name : 'Unknown Category';
    };


    return (
        <>
            <HeaderNav />
            {transactions.map((transaction, index) => {
                const categoryName = getCategoryName(transaction.category);
                const category = categories.find(cat => cat.id === transaction.category);
                const textColor = category && category.type === 'expense' ? 'text-danger' : 'text-success';
                
                return (
                    <div className="card" key={index}>
                        <div className="card-body">
                            <span className="me-5">Time: {transaction.time}</span>
                            <b className="me-5">Category: {categoryName}</b>
                            <b className={textColor}>{transaction.amount} KGZ</b>
                        </div>
                    </div>
                );
            })}
        </>
    )
};

export default FinancePage;