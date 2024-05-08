export interface AdInitialValues {
  make: { label: string; value: string } | null;
  model: { label: string; value: string } | null;
  year: { label: string; value: string } | null;
  images: Blob[] | [];
}
