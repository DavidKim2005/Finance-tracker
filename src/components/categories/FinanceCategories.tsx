import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import HeaderNav from "../HeaderNav";
import { fetchCategories } from "../../store/categoriesThunks";

const FinanceCategories = () => {
    const dispatch = useAppDispatch();
    const categories = useAppSelector(state => state.categories.data);

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch])

    return (
        <>
            <HeaderNav />
            <div className="d-flex flex-column">
                {categories.map((category, index) => (
                    <div className="card" key={index}>
                        <div className="card-body d-flex justify-content-between">
                            <b>{category.name}</b>
                            <b className={category.type === 'income' ? 'text-success' : 'text-danger'}>{category.type}</b>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default FinanceCategories;
