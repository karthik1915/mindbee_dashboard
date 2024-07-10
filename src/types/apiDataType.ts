export interface ApiDataType {
  created_at: string;
  email: string;
  form_name: string;
  form_type: "main_form" | "course_form" | "internship_form";
  get_updates: boolean;
  is_contacted: boolean;
  message?: string;
  mobile: string;
  name: string;
}
