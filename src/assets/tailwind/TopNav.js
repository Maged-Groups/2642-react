const def_bg = `bg-gray-900`;
const border_color = `border-b-gray-900`;

export const styles = {
    nav: `px-3 py-1 ${def_bg} text-gray-100 grid gap-3 sticky top-0 z-50`,
    top: 'flex justify-between items-center gap-4',
    branding: 'bg-white rounded-full p-1 flex-1',
    links: 'flex',
    link: `px-3 py-1 rounded-md border-b-2 ${border_color} hover:border-b-gray-100 hover:bg-gray-400 hover:text-gray-900`,
    account: 'flex gap-2',
    btn: 'px-3 py-2 rounded-md shadow-sm text-white border',
    login: 'bg-green-600',
    register: 'bg-sky-600',
    logout: 'bg-red-600',
    bottom: 'flex items-center justify-between'
}
