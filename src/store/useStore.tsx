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
  active: boolean,
  items: Item[]
}

type State = {
  url: string,
  filter: string,
  sidebar: Sidebar[]
}

type Action = {
  // updateUrl: (url: State['url']) => void
  // updateFilter: (filter: State['filter']) => void
  // updateSidebar: (sidebar: State['sidebar']) => void

  updateState: (newState: Partial<State>) => void;
}

// Create your store, which includes both state and (optionally) actions
const useStore = create<State & Action>((set) => ({
  url: '',
  filter: '',
  sidebar: capas,
  // updateUrl: (url: string) => set(() => ({ url })),
  // updateFilter: (filter: string) => set(() => ({ filter })),
  // updateSidebar: (sidebar: Sidebar[]) => set(() => ({ sidebar }))

  updateState: (newState) => set((state) => ({ ...state, ...newState })),
}));

export default useStore;
