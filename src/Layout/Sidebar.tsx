import { Accordion } from "flowbite-react";
// import { capas } from "../const";
import useStore from "../store/useStore";

const Sidebar = () => {
    const { sidebar, filter, updateUrl, updateFilter } = useStore((state) => state);

    const onAddFilter = (url: string, layers: string, id: number) => {
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
    
        console.log(url, newFilter);
        updateUrl(url);
        updateFilter(newFilter);
    }

    return (
        <div className="w-1/6 h-full border-r border-gray-200">
            <Accordion className="border-r-0">
            {
                sidebar.map((capa) => (
                <Accordion.Panel key={capa.id}>
                    <Accordion.Title>{capa.nombre}</Accordion.Title>
                
                    <Accordion.Content className="p-0">
                        <ul>
                        {
                            capa.items.map((item) => (
                                <li key={item.id} className={`py-2 px-6 hover:bg-slate-300 hover:cursor-pointer ${item.status && 'bg-orange-500'}`} onClick={() => onAddFilter(capa.url, item.layers, item.id)}>
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