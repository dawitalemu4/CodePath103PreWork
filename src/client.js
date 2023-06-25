import { createClient } from '@supabase/supabase-js';

const URL = 'https://uslnwaullsjhopukbhte.supabase.co';

const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVzbG53YXVsbHNqaG9wdWtiaHRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODc3MDc5NTUsImV4cCI6MjAwMzI4Mzk1NX0._1CM5Qp6xsdYhbxIode5KzrIilBa9SWsa2dy-iB6WIg';

export default createClient(URL, API_KEY);

//pw: codepath103!