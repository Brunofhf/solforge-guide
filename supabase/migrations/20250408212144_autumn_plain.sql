/*
  # Initial Schema Setup for SolForge Fusion Tutorial Site

  1. New Tables
    - `videos`: Stores tutorial videos
      - `id` (uuid, primary key)
      - `title` (text)
      - `url` (text)
      - `description` (text)
      - `created_at` (timestamp)
    
    - `comments`: Stores user comments on videos
      - `id` (uuid, primary key)
      - `video_id` (uuid, foreign key)
      - `content` (text)
      - `user_name` (text)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on both tables
    - Add policies for public read access
    - Add policies for authenticated users to create content
*/

-- Create videos table
CREATE TABLE IF NOT EXISTS videos (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  url text NOT NULL,
  description text,
  created_at timestamptz DEFAULT now()
);

-- Create comments table
CREATE TABLE IF NOT EXISTS comments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  video_id uuid REFERENCES videos(id) ON DELETE CASCADE,
  content text NOT NULL,
  user_name text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE videos ENABLE ROW LEVEL SECURITY;
ALTER TABLE comments ENABLE ROW LEVEL SECURITY;

-- Create policies for videos
CREATE POLICY "Allow public read access to videos"
  ON videos
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow authenticated users to create videos"
  ON videos
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Create policies for comments
CREATE POLICY "Allow public read access to comments"
  ON comments
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow authenticated users to create comments"
  ON comments
  FOR INSERT
  TO authenticated
  WITH CHECK (true);