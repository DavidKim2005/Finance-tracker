import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchCategories } from "../../store/categoriesThunks";

const AddModal = ({ show, onHide }) => {
    const dispatch = useAppDispatch();
    const categories = useAppSelector(state => state.categories.data);

    useEffect(() => {
        dispatch(fetchCategories())
    }, [dispatch])
    return (
        <>
            {show && (
                <div className="modal border rounded border-black p-5">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title mb-2">Add Modal</h5>
                                <button type="button" className="btn-close" onClick={onHide}></button> 
                            </div>
                            <div className="modal-body mb-5">
                                <div className="dropdown mb-5 mt-3">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                                        Choose type
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li>Expense</li>
                                        <li>Income</li>
                                    </ul>
                                </div>
                                <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                                        Choose category
                                    </button>
                                    <ul className="dropdown-menu">
                                    {categories.map((category, index) => (
                                            <li key={index}>{category.name}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary me-3" onClick={onHide}>Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default AddModal;
