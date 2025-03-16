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
      lead_activities: {
        Row: {
          created_at: string
          id: string
          leadId: string | null
          status: string | null
          title: string
          updated_at: string | null
          userId: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          leadId?: string | null
          status?: string | null
          title?: string
          updated_at?: string | null
          userId?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          leadId?: string | null
          status?: string | null
          title?: string
          updated_at?: string | null
          userId?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "activities_lead_id_fkey"
            columns: ["leadId"]
            isOneToOne: false
            referencedRelation: "leads"
            referencedColumns: ["id"]
          },
        ]
      }
      lead_magnet_responses: {
        Row: {
          country: string | null
          created_at: string
          email: string
          id: string
          lead_magnet_id: string | null
          name: string
        }
        Insert: {
          country?: string | null
          created_at?: string
          email: string
          id?: string
          lead_magnet_id?: string | null
          name: string
        }
        Update: {
          country?: string | null
          created_at?: string
          email?: string
          id?: string
          lead_magnet_id?: string | null
          name?: string
        }
        Relationships: [
          {
            foreignKeyName: "lead_magnet_responses_lead_magnet_id_fkey"
            columns: ["lead_magnet_id"]
            isOneToOne: false
            referencedRelation: "lead_magnets"
            referencedColumns: ["id"]
          },
        ]
      }
      lead_magnets: {
        Row: {
          access_url: string | null
          auto_add_leads: boolean
          created_at: string
          description: string
          featured_image: string | null
          file: string | null
          id: string
          product_id: string
          title: string
          type: string | null
        }
        Insert: {
          access_url?: string | null
          auto_add_leads?: boolean
          created_at?: string
          description: string
          featured_image?: string | null
          file?: string | null
          id?: string
          product_id: string
          title: string
          type?: string | null
        }
        Update: {
          access_url?: string | null
          auto_add_leads?: boolean
          created_at?: string
          description?: string
          featured_image?: string | null
          file?: string | null
          id?: string
          product_id?: string
          title?: string
          type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "lead_magnets_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      leads: {
        Row: {
          company: string | null
          created_at: string
          email: string | null
          id: string
          lastContacted: string | null
          name: string
          productId: string
          status: string | null
          type: string | null
          updated_at: string | null
        }
        Insert: {
          company?: string | null
          created_at?: string
          email?: string | null
          id?: string
          lastContacted?: string | null
          name: string
          productId: string
          status?: string | null
          type?: string | null
          updated_at?: string | null
        }
        Update: {
          company?: string | null
          created_at?: string
          email?: string | null
          id?: string
          lastContacted?: string | null
          name?: string
          productId?: string
          status?: string | null
          type?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "leads_productId_fkey"
            columns: ["productId"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      products: {
        Row: {
          belongsToId: string | null
          created_at: string
          description: string | null
          id: string
          lead_statuses: string[]
          lead_types: string[]
          name: string
          updated_at: string | null
        }
        Insert: {
          belongsToId?: string | null
          created_at?: string
          description?: string | null
          id?: string
          lead_statuses?: string[]
          lead_types?: string[]
          name: string
          updated_at?: string | null
        }
        Update: {
          belongsToId?: string | null
          created_at?: string
          description?: string | null
          id?: string
          lead_statuses?: string[]
          lead_types?: string[]
          name?: string
          updated_at?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
  | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
  | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
  ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
    Database[PublicTableNameOrOptions["schema"]]["Views"])
  : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
    Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
  ? R
  : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
    PublicSchema["Views"])
  ? (PublicSchema["Tables"] &
    PublicSchema["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
  ? R
  : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
  | keyof PublicSchema["Tables"]
  | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
  ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
  : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
    Insert: infer I
  }
  ? I
  : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
    Insert: infer I
  }
  ? I
  : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
  | keyof PublicSchema["Tables"]
  | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
  ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
  : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
    Update: infer U
  }
  ? U
  : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
    Update: infer U
  }
  ? U
  : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
  | keyof PublicSchema["Enums"]
  | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
  ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
  : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
  ? PublicSchema["Enums"][PublicEnumNameOrOptions]
  : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
  | keyof PublicSchema["CompositeTypes"]
  | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
  ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
  : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
  ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
  : never
