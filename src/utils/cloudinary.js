const config = { cloudName: 'dhzqbwd3r' };

export const getCloudinaryUrl = (publicId, type = 'image') => {
  if (!publicId) return '';
  
  // Debug logging
  //console.log('🔍 Processing resource:', publicId, 'type:', type);
  
  // Handle video URLs
  if (type === 'video') {
    const base = `https://res.cloudinary.com/${config.cloudName}/video/upload`;
    const transforms = 'q_auto';
    const finalUrl = `${base}/${transforms}/${publicId}.mp4`;
   // console.log('🔗 Generated video URL:', finalUrl);
    return finalUrl;
  }
  
  // Handle image URLs
  const base = `https://res.cloudinary.com/${config.cloudName}/image/upload`;
  const transforms = 'q_auto,f_auto';
  const finalUrl = `${base}/${transforms}/${publicId}`;
  //console.log('🔗 Generated image URL:', finalUrl);
  return finalUrl;
}