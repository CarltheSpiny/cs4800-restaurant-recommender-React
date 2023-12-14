# cs4800-restaurant-recommender-React

# 4.6.1

Latest and Final Release

Features Overview:
- user register & login
- personalized restaurant reccomendation on home page
- relevant results using the navigator's geolocation with reverse address lookup
- detailed restaurant information (website, address, food type, etc.)
- user can like a restaurant to influence reccomendations
- can search for specific restaurants with a message
- can delete account or clear liked list

Bugs:
- geolocation can be inaccurate (generalizes location by county)
- some latency in network connections, resulting in slow responses
- reloading a page (other than home) causes a 404 error
- possible race conditions (deleetd account is still logged in when network conditions are slow) 
- images are layed out differently if dimensions vary

Security Vulnerabilities:
- address is sent unencrypted
 
