export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      categories: {
        Row: {
          category: string
          slug: string | null
        }
        Insert: {
          category: string
          slug?: string | null
        }
        Update: {
          category?: string
          slug?: string | null
        }
        Relationships: []
      }
      gpu_spec: {
        Row: {
          base_clock_mhz: number | null
          boost_clock_mhz: number | null
          brand: string | null
          bus_interface: string | null
          line: string | null
          memory_size_gb: number | null
          memory_type: string | null
          model: string
          release_date: string | null
          series: string | null
          tdp: number | null
        }
        Insert: {
          base_clock_mhz?: number | null
          boost_clock_mhz?: number | null
          brand?: string | null
          bus_interface?: string | null
          line?: string | null
          memory_size_gb?: number | null
          memory_type?: string | null
          model: string
          release_date?: string | null
          series?: string | null
          tdp?: number | null
        }
        Update: {
          base_clock_mhz?: number | null
          boost_clock_mhz?: number | null
          brand?: string | null
          bus_interface?: string | null
          line?: string | null
          memory_size_gb?: number | null
          memory_type?: string | null
          model?: string
          release_date?: string | null
          series?: string | null
          tdp?: number | null
        }
        Relationships: []
      }
      motherboards: {
        Row: {
          brand: string
          chipset: string | null
          formfactor: string | null
          full_name: string | null
          height_mm: string | null
          id: string | null
          m2_slots: number | null
          memory_capacity_gb: number | null
          min_price: number | null
          name: string
          pci_slot: number | null
          "pcie_2.0_x16_slot": number | null
          "pcie_3.0_x16_slot": number | null
          "pcie_4.0_x16_slot": number | null
          "pcie_5.0_x16_slot": number | null
          pcie_x1_slot: number | null
          pcie_x16_slot: number | null
          pcie_x4_slot: number | null
          pcie_x8_slot: number | null
          ram_slots: number | null
          ram_speed: number | null
          ram_type: string | null
          sata_ports: number | null
          socket: string | null
          uid: string | null
          width_mm: string | null
        }
        Insert: {
          brand: string
          chipset?: string | null
          formfactor?: string | null
          full_name?: string | null
          height_mm?: string | null
          id?: string | null
          m2_slots?: number | null
          memory_capacity_gb?: number | null
          min_price?: number | null
          name: string
          pci_slot?: number | null
          "pcie_2.0_x16_slot"?: number | null
          "pcie_3.0_x16_slot"?: number | null
          "pcie_4.0_x16_slot"?: number | null
          "pcie_5.0_x16_slot"?: number | null
          pcie_x1_slot?: number | null
          pcie_x16_slot?: number | null
          pcie_x4_slot?: number | null
          pcie_x8_slot?: number | null
          ram_slots?: number | null
          ram_speed?: number | null
          ram_type?: string | null
          sata_ports?: number | null
          socket?: string | null
          uid?: string | null
          width_mm?: string | null
        }
        Update: {
          brand?: string
          chipset?: string | null
          formfactor?: string | null
          full_name?: string | null
          height_mm?: string | null
          id?: string | null
          m2_slots?: number | null
          memory_capacity_gb?: number | null
          min_price?: number | null
          name?: string
          pci_slot?: number | null
          "pcie_2.0_x16_slot"?: number | null
          "pcie_3.0_x16_slot"?: number | null
          "pcie_4.0_x16_slot"?: number | null
          "pcie_5.0_x16_slot"?: number | null
          pcie_x1_slot?: number | null
          pcie_x16_slot?: number | null
          pcie_x4_slot?: number | null
          pcie_x8_slot?: number | null
          ram_slots?: number | null
          ram_speed?: number | null
          ram_type?: string | null
          sata_ports?: number | null
          socket?: string | null
          uid?: string | null
          width_mm?: string | null
        }
        Relationships: []
      }
      no_match_products: {
        Row: {
          category: string | null
          created_at: string | null
          id: number
          link: string | null
          name: string | null
          price: number | null
        }
        Insert: {
          category?: string | null
          created_at?: string | null
          id?: number
          link?: string | null
          name?: string | null
          price?: number | null
        }
        Update: {
          category?: string | null
          created_at?: string | null
          id?: number
          link?: string | null
          name?: string | null
          price?: number | null
        }
        Relationships: []
      }
      processors: {
        Row: {
          architecture: string | null
          base_clock_ghz: number | null
          boost_clock_ghz: string | null
          brand: string | null
          cores: number | null
          full_name: string | null
          id: string | null
          integrated_gpu: string | null
          l2_cache_mb: number | null
          l3_cache_mb: number | null
          line: string
          memory_speed_mbps: number | null
          memory_type: string | null
          min_price: number | null
          model: string
          msrp_usd: string | null
          overclock: string | null
          pcie_lanes: string | null
          process: string | null
          socket: string | null
          tdp_w: number | null
          threads: number | null
          uid: string | null
        }
        Insert: {
          architecture?: string | null
          base_clock_ghz?: number | null
          boost_clock_ghz?: string | null
          brand?: string | null
          cores?: number | null
          full_name?: string | null
          id?: string | null
          integrated_gpu?: string | null
          l2_cache_mb?: number | null
          l3_cache_mb?: number | null
          line: string
          memory_speed_mbps?: number | null
          memory_type?: string | null
          min_price?: number | null
          model: string
          msrp_usd?: string | null
          overclock?: string | null
          pcie_lanes?: string | null
          process?: string | null
          socket?: string | null
          tdp_w?: number | null
          threads?: number | null
          uid?: string | null
        }
        Update: {
          architecture?: string | null
          base_clock_ghz?: number | null
          boost_clock_ghz?: string | null
          brand?: string | null
          cores?: number | null
          full_name?: string | null
          id?: string | null
          integrated_gpu?: string | null
          l2_cache_mb?: number | null
          l3_cache_mb?: number | null
          line?: string
          memory_speed_mbps?: number | null
          memory_type?: string | null
          min_price?: number | null
          model?: string
          msrp_usd?: string | null
          overclock?: string | null
          pcie_lanes?: string | null
          process?: string | null
          socket?: string | null
          tdp_w?: number | null
          threads?: number | null
          uid?: string | null
        }
        Relationships: []
      }
      vendor_motherboard: {
        Row: {
          component_id: string | null
          created_at: string | null
          id: number
          link: string | null
          price: number | null
          title: string | null
          vendor_id: string | null
        }
        Insert: {
          component_id?: string | null
          created_at?: string | null
          id?: number
          link?: string | null
          price?: number | null
          title?: string | null
          vendor_id?: string | null
        }
        Update: {
          component_id?: string | null
          created_at?: string | null
          id?: number
          link?: string | null
          price?: number | null
          title?: string | null
          vendor_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "vendor_motherboard_component_id_fkey"
            columns: ["component_id"]
            referencedRelation: "motherboards"
            referencedColumns: ["full_name"]
          },
          {
            foreignKeyName: "vendor_motherboard_vendor_id_fkey"
            columns: ["vendor_id"]
            referencedRelation: "vendors"
            referencedColumns: ["vendor"]
          }
        ]
      }
      vendor_processor: {
        Row: {
          component_id: string | null
          created_at: string | null
          id: number
          link: string | null
          price: number | null
          title: string | null
          vendor_id: string | null
        }
        Insert: {
          component_id?: string | null
          created_at?: string | null
          id?: number
          link?: string | null
          price?: number | null
          title?: string | null
          vendor_id?: string | null
        }
        Update: {
          component_id?: string | null
          created_at?: string | null
          id?: number
          link?: string | null
          price?: number | null
          title?: string | null
          vendor_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "vendor_processor_component_id_fkey"
            columns: ["component_id"]
            referencedRelation: "processors"
            referencedColumns: ["full_name"]
          },
          {
            foreignKeyName: "vendor_processor_vendor_id_fkey"
            columns: ["vendor_id"]
            referencedRelation: "vendors"
            referencedColumns: ["vendor"]
          }
        ]
      }
      vendor_video_card: {
        Row: {
          component_id: string | null
          created_at: string | null
          id: number
          link: string | null
          price: number | null
          title: string | null
          vendor_id: string | null
        }
        Insert: {
          component_id?: string | null
          created_at?: string | null
          id?: number
          link?: string | null
          price?: number | null
          title?: string | null
          vendor_id?: string | null
        }
        Update: {
          component_id?: string | null
          created_at?: string | null
          id?: number
          link?: string | null
          price?: number | null
          title?: string | null
          vendor_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "vendor_video_card_component_id_fkey"
            columns: ["component_id"]
            referencedRelation: "video_cards"
            referencedColumns: ["full_name"]
          },
          {
            foreignKeyName: "vendor_video_card_vendor_id_fkey"
            columns: ["vendor_id"]
            referencedRelation: "vendors"
            referencedColumns: ["vendor"]
          }
        ]
      }
      vendors: {
        Row: {
          vendor: string
          website_link: string
        }
        Insert: {
          vendor: string
          website_link: string
        }
        Update: {
          vendor?: string
          website_link?: string
        }
        Relationships: []
      }
      video_cards: {
        Row: {
          boost_clock_mhz: number | null
          brand: string
          display_port: number | null
          fans: number | null
          full_name: string | null
          gpu: string | null
          gpu_spec_ref: string | null
          hdmi: number | null
          height_mm: number | null
          id: string | null
          length_mm: number | null
          memory_speed_gbps: number | null
          min_price: number | null
          model: string
          name: string
          pcie_bracket: number | null
          pcie_pins: string | null
          slots: number | null
          tdp: number | null
          uid: string | null
          width_mm: number | null
        }
        Insert: {
          boost_clock_mhz?: number | null
          brand: string
          display_port?: number | null
          fans?: number | null
          full_name?: string | null
          gpu?: string | null
          gpu_spec_ref?: string | null
          hdmi?: number | null
          height_mm?: number | null
          id?: string | null
          length_mm?: number | null
          memory_speed_gbps?: number | null
          min_price?: number | null
          model: string
          name: string
          pcie_bracket?: number | null
          pcie_pins?: string | null
          slots?: number | null
          tdp?: number | null
          uid?: string | null
          width_mm?: number | null
        }
        Update: {
          boost_clock_mhz?: number | null
          brand?: string
          display_port?: number | null
          fans?: number | null
          full_name?: string | null
          gpu?: string | null
          gpu_spec_ref?: string | null
          hdmi?: number | null
          height_mm?: number | null
          id?: string | null
          length_mm?: number | null
          memory_speed_gbps?: number | null
          min_price?: number | null
          model?: string
          name?: string
          pcie_bracket?: number | null
          pcie_pins?: string | null
          slots?: number | null
          tdp?: number | null
          uid?: string | null
          width_mm?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "video_cards_gpu_spec_ref_fkey"
            columns: ["gpu_spec_ref"]
            referencedRelation: "gpu_spec"
            referencedColumns: ["model"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      closest_match: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      get_processors_sorted_by_reference_and_price: {
        Args: Record<PropertyKey, never>
        Returns: {
          full_name: string
          lowest_price: number
        }[]
      }
      search_model:
        | {
            Args: {
              p_model_name: string
            }
            Returns: {
              model: string
            }[]
          }
        | {
            Args: {
              p_model_name: string
              mem_type: string
            }
            Returns: {
              model: string
            }[]
          }
      search_motherboard_similarity: {
        Args: {
          p_brand: string
          p_model_name: string
        }
        Returns: {
          full_name: string
        }[]
      }
      search_processor_similarity: {
        Args: {
          p_brand: string
          p_model_name: string
        }
        Returns: {
          full_name: string
        }[]
      }
      search_product: {
        Args: {
          table_name: string
          search_term: string
        }
        Returns: {
          full_name: string
          uid: string
        }[]
      }
      search_product_similarity: {
        Args: {
          table_name: string
          product_name: string
        }
        Returns: {
          uid: string
          full_name: string
        }[]
      }
      search_product_similarity2: {
        Args: {
          table_name: string
          product_name: string
        }
        Returns: {
          full_name: string
          uid: string
        }[]
      }
      search_video_card_similarity:
        | {
            Args: {
              p_brand: string
              p_model_name: string
              spec_ref: string
            }
            Returns: {
              full_name: string
            }[]
          }
        | {
            Args: {
              p_brand: string
              p_model_name: string
            }
            Returns: {
              full_name: string
            }[]
          }
    }
    Enums: {
      continents:
        | "Africa"
        | "Antarctica"
        | "Asia"
        | "Europe"
        | "Oceania"
        | "North America"
        | "South America"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
