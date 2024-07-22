export default function Navbar() {
    return (
    <>
    <nav class=" bg-stone-400">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div class="relative flex h-16 items-center justify-between">
                <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
        </div>


        <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
                <a> <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="white" viewBox="0 0 15 15">
                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
                </svg></a>
            </div>
        </div>


        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <a class="rounded-lg px-5 py-2 text-md font-light font-sans text-white hover:bg-stone-500 hover:text-white">About</a>
            <a class="rounded-lg px-5 py-2 text-md font-light font-sans text-white hover:bg-stone-500 hover:text-white">Contact</a>
        </div>
    </div>
    </div>
    </nav>
    </>
    )
}