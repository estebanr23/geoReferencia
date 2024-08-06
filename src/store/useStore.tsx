import { create } from 'zustand';
import { capas } from '../const';

interface Item {
  id: number,
  title: string,
  layers: string,
  status: boolean
}

interface Sidebar {
  id: number,
  nombre: string,
  url: string,
  items: Item[]
}

type State = {
  url: string,
  filter: string,
  sidebar: Sidebar[]
}

type Action = {
  updateUrl: (url: State['url']) => void
  updateFilter: (filter: State['filter']) => void
}

// Create your store, which includes both state and (optionally) actions
const useStore = create<State & Action>((set) => ({
  url: '',
  filter: '',
  sidebar: capas,
  updateUrl: (url) => set(() => ({ url: url })),
  updateFilter: (filter) => set(() => ({ filter: filter }))
}));

export default useStore;