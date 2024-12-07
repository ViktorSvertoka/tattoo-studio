export interface FormField {
  id: string;
  name: string;
  label: string;
  type: string;
  required: boolean;
}

export const formFields: FormField[] = [
  {
    id: 'name',
    name: 'name',
    label: 'Name',
    type: 'text',
    required: true,
  },
  {
    id: 'email',
    name: 'email',
    label: 'Email',
    type: 'email',
    required: true,
  },
  {
    id: 'phone',
    name: 'phone',
    label: 'Phone',
    type: 'tel',
    required: true,
  },
  {
    id: 'message',
    name: 'message',
    label: 'Message',
    type: 'textarea',
    required: true,
  },
];
