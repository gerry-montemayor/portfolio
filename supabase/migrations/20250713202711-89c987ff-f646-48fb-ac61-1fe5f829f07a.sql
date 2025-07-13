-- Create storage bucket for resume files
INSERT INTO storage.buckets (id, name, public) VALUES ('resume', 'resume', true);

-- Create policies for resume bucket
CREATE POLICY "Resume files are publicly accessible" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'resume');

CREATE POLICY "Anyone can upload resume files" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'resume');

CREATE POLICY "Anyone can update resume files" 
ON storage.objects 
FOR UPDATE 
USING (bucket_id = 'resume');

CREATE POLICY "Anyone can delete resume files" 
ON storage.objects 
FOR DELETE 
USING (bucket_id = 'resume');