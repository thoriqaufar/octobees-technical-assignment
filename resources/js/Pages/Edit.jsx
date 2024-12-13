import React from "react";
import { useForm } from "@inertiajs/react";

const Edit = ({ person }) => {
    const { data, setData, put, processing, errors } = useForm({
        name: person.name,
        birth_date: person.birth_date,
        residence: person.residence,
    });

    function submit(e) {
        e.preventDefault();
        put(`/persons/${person.id}`);
    }

    return (
        <>
            <h1 className="title">Edit person data</h1>

            <div className={"w-1/2 mx-auto"}>
                <form onSubmit={submit}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input
                            id="name"
                            type="text"
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                            className={errors.name && "!ring-red-500"}
                        />
                    </div>

                    {errors.name && <p className="error">{errors.name}</p>}

                    <div>
                        <label htmlFor="birth_date">Birth Date</label>
                        <input
                            id="birth_date"
                            type="date"
                            value={data.birth_date}
                            onChange={(e) =>
                                setData("birth_date", e.target.value)
                            }
                            className={errors.birth_date && "!ring-red-500"}
                        />
                    </div>

                    {errors.birth_date && (
                        <p className="error">{errors.birth_date}</p>
                    )}

                    <div>
                        <label htmlFor="residence">Residence</label>
                        <input
                            id="residence"
                            type="text"
                            value={data.residence}
                            onChange={(e) =>
                                setData("residence", e.target.value)
                            }
                            className={errors.residence && "!ring-red-500"}
                        />
                    </div>

                    {errors.residence && (
                        <p className="error">{errors.residence}</p>
                    )}

                    <button className="primary-btn mt-4" disabled={processing}>
                        Create
                    </button>
                </form>
            </div>
        </>
    );
};

export default Edit;
