import React, { useEffect, useState } from "react";
import { Link, useForm } from "@inertiajs/react";

const Home = ({ persons, search }) => {
    const { delete: destroy } = useForm();

    function submit(personId) {
        return (e) => {
            e.preventDefault();
            destroy(`/persons/${personId}`);
        };
    }

    return (
        <>
            <h1 className={"title"}>Person Data</h1>

            <div>
                {/*<div className="flex justify-end mb-4 mt-4">*/}
                {/*    <form className="flex gap-2 w-1/2">*/}
                {/*        <button className="bg-slate-800 rounded-md text-white w-1/4">*/}
                {/*            Search*/}
                {/*        </button>*/}
                {/*        <input type="text" placeholder="Search..." />*/}
                {/*    </form>*/}
                {/*</div>*/}

                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Birth Date</th>
                            <th>Residence</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {persons.data.map((person) => (
                            <tr key={person.id}>
                                <td>{person.name}</td>
                                <td>{person.birth_date}</td>
                                <td>{person.residence}</td>
                                <td>
                                    <div className="flex items-center gap-2">
                                        <form onSubmit={submit(person.id)}>
                                            <button className="bg-red-500 rounded-md text-sm px-4 py-1 text-white">
                                                Delete
                                            </button>
                                        </form>

                                        <Link
                                            className="bg-yellow-500 rounded-md text-sm px-4 py-1 text-white"
                                            href={`persons/${person.id}/edit`}
                                        >
                                            Edit
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="flex justify-center items-center py-12 px-4">
                {persons.links.map((person) =>
                    person.url ? (
                        <Link
                            key={person.label}
                            href={person.url}
                            dangerouslySetInnerHTML={{ __html: person.label }}
                            className={`p-1 mx-1 ${
                                person.active ? "text-blue-500 font-bold" : ""
                            }`}
                        />
                    ) : (
                        <span
                            key={person.label}
                            dangerouslySetInnerHTML={{ __html: person.label }}
                            className="p-1 mx-1 text-slate-300"
                        ></span>
                    ),
                )}
            </div>
        </>
    );
};

export default Home;
