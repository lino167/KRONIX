export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      appointments: {
        Row: {
          customer_id: string | null
          end_time: string
          id: string
          service_id: string | null
          staff_id: string | null
          start_time: string
          status: string | null
          tenant_id: string | null
        }
        Insert: {
          customer_id?: string | null
          end_time: string
          id?: string
          service_id?: string | null
          staff_id?: string | null
          start_time: string
          status?: string | null
          tenant_id?: string | null
        }
        Update: {
          customer_id?: string | null
          end_time?: string
          id?: string
          service_id?: string | null
          staff_id?: string | null
          start_time?: string
          status?: string | null
          tenant_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "appointments_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "appointments_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "services"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "appointments_staff_id_fkey"
            columns: ["staff_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "appointments_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      customers: {
        Row: {
          email: string | null
          id: string
          name: string
          phone: string | null
          tenant_id: string | null
        }
        Insert: {
          email?: string | null
          id?: string
          name: string
          phone?: string | null
          tenant_id?: string | null
        }
        Update: {
          email?: string | null
          id?: string
          name?: string
          phone?: string | null
          tenant_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "customers_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          full_name: string | null
          id: string
          role: string | null
          tenant_id: string | null
        }
        Insert: {
          full_name?: string | null
          id: string
          role?: string | null
          tenant_id?: string | null
        }
        Update: {
          full_name?: string | null
          id?: string
          role?: string | null
          tenant_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      services: {
        Row: {
          duration_min: number
          id: string
          name: string
          price: number
          tenant_id: string | null
        }
        Insert: {
          duration_min: number
          id?: string
          name: string
          price: number
          tenant_id?: string | null
        }
        Update: {
          duration_min?: number
          id?: string
          name?: string
          price?: number
          tenant_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "services_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      tenants: {
        Row: {
          created_at: string
          id: string
          name: string
          slug: string
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
          slug: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          slug?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_auth_tenant_id: {
        Args: never
        Returns: string
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
