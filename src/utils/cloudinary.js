const config = { cloudName: 'dhzqbwd3r' };

export const getCloudinaryUrl = (publicId) => {
  if (!publicId) return '';
  
  // Debug logging
  console.log('🔍 Processing image:', publicId);
  
  const base = `https://res.cloudinary.com/${config.cloudName}/image/upload`;
  const transforms = 'q_auto,f_auto'; // Basic quality and format optimization
  const finalUrl = `${base}/${transforms}/${publicId}`;
  
  console.log('🔗 Generated URL:', finalUrl);
  
  console.log('🔗 Final URL:', finalUrl);
  
  return finalUrl;
}
