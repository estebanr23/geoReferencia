import { Accordion } from "flowbite-react";
import useStore from "../store/useStore";

interface Item {
    id: number,
    title: string,
    layers: string,
    status: boolean
}

const Sidebar = () => {
    const { sidebar, filter, updateState } = useStore();

    const counterItems = (items: Item[]) => {
        let accumulator: number = 0;
        items.forEach((item) => { 
            if (item.status) accumulator = accumulator + 1;
        });

        return accumulator;
    };

    const onAddFilter = (url: string, layers: string, itemId: number) => {
        let newFilter = ''; 
    
        if (filter === '') {
          newFilter = layers;
        } else {
          const exist =  filter.includes(layers);
          if (exist) {
            newFilter = filter.split(',').filter((element) => element !== layers).join(',');
          } else {
            newFilter = `${filter},${layers}`;
          }
        }

        const newSidebar = sidebar.map((sid) => {
            const items = sid.items.map((item) => (
                item.id === itemId ? { ...item, status: !item.status } : item
            ))

            return {
                ...sid,
                active: items.some((item) => item.status === true),
                count: counterItems(items),
                items
            }
        });

        updateState({
            url,
            filter: newFilter,
            sidebar: newSidebar,
        });
    }

    return (
        <div className="w-1/6 h-full border-r border-gray-200">
            <Accordion className="border-r-0">
            {
                sidebar.map((capa) => (
                <Accordion.Panel key={capa.id}>
                    <Accordion.Title className={`${capa.active && 'bg-slate-800 text-white'}`}>{capa.nombre} 
                        { (capa.count > 0) && <span className="ml-1 px-2.5 py-1 rounded-full bg-sky-400 text-xs text-white">{capa.count}</span> }
                    </Accordion.Title>

                    <Accordion.Content className="p-0">
                        <ul>
                        {
                            capa.items.map((item) => (
                                <li key={item.id} className={`py-2 px-6 hover:bg-slate-300 hover:cursor-pointer ${item.status && 'bg-orange-300 border-y border-white'}`} onClick={() => onAddFilter(capa.url, item.layers, item.id)}>
                                    <p>{item.title}</p>
                                </li>
                            ))
                        }
                        </ul>
                    </Accordion.Content>
                    </Accordion.Panel>
                ))
            }
            </Accordion>
        </div>
    )
}

export default Sidebar;