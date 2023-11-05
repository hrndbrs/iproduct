function Footer() {
    return (
        <footer
            className="md:flex hidden flex-col items-center bg-neutral-900 text-center text-white absolute w-full bottom-0">
            <div className="container px-6 pt-6">
                <div>
                    <form>
                        <div
                            className="grid-cols-1 grid items-center justify-center gap-4 md:grid-cols-3">
                            <div className="md:mb-6 md:ml-auto">
                                <p className="">
                                    <strong>Sign up for our newsletter</strong>
                                </p>
                            </div>

                            <div className="relative md:mb-6" >
                                <input
                                    type="text"
                                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] text-neutral-200 outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                    id="exampleFormControlInput1"
                                />
                                <label
                                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-200 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-neutral-200 peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                                >Email address
                                </label>
                            </div>

                            <div className="mb-6 md:mr-auto">
                                <button
                                    type="button"
                                    className="inline-block rounded border-2 border-neutral-50 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="mb-6">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                        distinctio earum repellat quaerat voluptatibus placeat nam,
                        commodi optio pariatur est quia magnam eum harum corrupti dicta,
                        aliquam sequi voluptate quas.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4">
                    <div className="mb-6">
                        <h5 className="mb-2.5 font-bold uppercase">Links</h5>

                        <ul className="mb-0 list-none">
                            <li>
                                <a className="text-white">Link 1</a>
                            </li>
                            <li>
                                <a className="text-white">Link 2</a>
                            </li>
                            <li>
                                <a className="text-white">Link 3</a>
                            </li>
                            <li>
                                <a className="text-white">Link 4</a>
                            </li>
                        </ul>
                    </div>

                    <div className="mb-6">
                        <h5 className="mb-2.5 font-bold uppercase">Links</h5>

                        <ul className="mb-0 list-none">
                            <li>
                                <a className="text-white">Link 1</a>
                            </li>
                            <li>
                                <a className="text-white">Link 2</a>
                            </li>
                            <li>
                                <a className="text-white">Link 3</a>
                            </li>
                            <li>
                                <a className="text-white">Link 4</a>
                            </li>
                        </ul>
                    </div>

                    <div className="mb-6">
                        <h5 className="mb-2.5 font-bold uppercase">Links</h5>

                        <ul className="mb-0 list-none">
                            <li>
                                <a className="text-white">Link 1</a>
                            </li>
                            <li>
                                <a className="text-white">Link 2</a>
                            </li>
                            <li>
                                <a className="text-white">Link 3</a>
                            </li>
                            <li>
                                <a className="text-white">Link 4</a>
                            </li>
                        </ul>
                    </div>

                    <div className="mb-6">
                        <h5 className="mb-2.5 font-bold uppercase">Links</h5>

                        <ul className="mb-0 list-none">
                            <li>
                                <a className="text-white">Link 1</a>
                            </li>
                            <li>
                                <a className="text-white">Link 2</a>
                            </li>
                            <li>
                                <a className="text-white">Link 3</a>
                            </li>
                            <li>
                                <a className="text-white">Link 4</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div
                className="w-full p-4 text-center"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                © 2023 Copyright: iProduct
            </div>
        </footer>
    )
}

export default Footer