interface Motherboard {
    brand: string;
    name: string;
    socket?: string;
    chipset?: string;
    formfactor?: string;
    height_mm?: number;
    width_mm?: number;
    memory_capacity_gb?: number;
    ram_slots?: number;
    ram_type?: string;
    m2_slots?: number;
    sata_ports?: number;
    pci_slot?: number;
    pcie_x1_slot?: number;
    pcie_x4_slot?: number;
    pcie_x8_slot?: number;
    pcie_x16_slot?: number;
    ram_speed?: number;
    pcie_2_0_x16_slot?: number;
    pcie_3_0_x16_slot?: number;
    pcie_4_0_x16_slot?: number;
    pcie_5_0_x16_slot?: number;
    full_name: string;
    uid: string;
    min_price?: number;
    vendors: Vendor[]; // Update this with the appropriate type for vendors
  }
  
  interface Processor {
    brand: string;
    line: string;
    model: string;
    socket: string;
    architecture: string;
    process: string;
    cores: number;
    threads: number;
    base_clock_ghz: number;
    boost_clock_ghz: string;
    l2_cache_mb: number;
    l3_cache_mb: number;
    pcie_lanes: string;
    integrated_gpu: string;
    memory_type: string;
    memory_speed_mbps: number;
    tdp_w: number;
    overclock: string;
    msrp_usd: string;
    full_name: string;
    min_price?: number;
    uid: string;
    vendors: Vendor[]; // Update this with the appropriate type for vendors
  }
  
  interface VideoCard {
    gpu: string;
    model: string;
    brand: string;
    name: string;
    length_mm: number;
    width_mm: number;
    height_mm: number;
    slots: number;
    pcie_bracket: number;
    boost_clock_mhz: number;
    memory_speed_gbps: number;
    tdp: number;
    pcie_pins: string;
    fans: number;
    display_port: number;
    hdmi: number;
    gpu_spec_ref: string;
    full_name: string;
    uid: string;
    min_price?: number;
    vendors: Vendor[]; // Update this with the appropriate type for vendors
  }
  
  interface Vendor {
    id: number,
    vendor_id: string,
    title: string,
    price: number
    link: string
  }

  export type {Motherboard, Processor, VideoCard}