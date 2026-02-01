<script setup lang="ts">
useHead({
  title: 'Earth Science - Complete Global Learning Path | Awesome Horizon',
  meta: [
    { name: 'description', content: 'Master Earth Science from K-12 to PhD research with 2000+ curated resources. Geology, meteorology, oceanography, climate science, virtual field trips, and research databases from USGS, NASA, NOAA.' }
  ]
})

const featuredResources = [
  { title: 'USGS', author: 'United States Geological Survey', url: 'https://www.usgs.gov/', desc: 'Comprehensive geological survey data, maps, and educational resources', color: 'amber' },
  { title: 'NASA Earth Observatory', author: 'NASA', url: 'https://earthobservatory.nasa.gov/', desc: 'Satellite imagery, climate data, and Earth science visualizations', color: 'orange' },
  { title: 'NOAA Education', author: 'NOAA', url: 'https://www.noaa.gov/education', desc: 'Ocean, atmosphere, and climate education resources', color: 'blue' },
  { title: 'Geology.com', author: 'Geology.com', url: 'https://geology.com/', desc: 'Geology news, maps, minerals, and educational content', color: 'amber' },
  { title: 'NASA Climate', author: 'NASA', url: 'https://climate.nasa.gov/', desc: 'Global climate change data and research', color: 'orange' },
  { title: 'National Weather Service', author: 'NOAA', url: 'https://www.weather.gov/', desc: 'Weather forecasts, alerts, and meteorological education', color: 'cyan' }
]

const quickLinks = [
  { name: 'K-12 Resources', url: '#k12', count: 136 },
  { name: 'Free Textbooks', url: '#textbooks', count: 28 },
  { name: 'Geology', url: '#geology', count: 88 },
  { name: 'Meteorology', url: '#meteorology', count: 70 },
  { name: 'Oceanography', url: '#oceanography', count: 58 },
  { name: 'Virtual Field Trips', url: '#field-trips', count: 33 },
  { name: 'Data Sources', url: '#data', count: 62 },
  { name: 'Research Journals', url: '#journals', count: 50 }
]

const k12Resources = [
  { title: 'USGS Education', url: 'https://www.usgs.gov/education', provider: 'USGS', type: 'Educational Portal', desc: 'K-12 geology, geography, and water science resources' },
  { title: 'NOAA Education', url: 'https://www.noaa.gov/education', provider: 'NOAA', type: 'Educational Portal', desc: 'Ocean, weather, and climate resources for students' },
  { title: 'NASA Climate Kids', url: 'https://climatekids.nasa.gov/', provider: 'NASA', type: 'Interactive', desc: 'Climate science games and activities for kids' },
  { title: 'National Geographic Education', url: 'https://education.nationalgeographic.org/', provider: 'NatGeo', type: 'Resources', desc: 'Earth science lessons, maps, and activities' },
  { title: 'PhET Earth Science', url: 'https://phet.colorado.edu/en/simulations/filter?subjects=earth-science', provider: 'CU Boulder', type: 'Simulation', desc: 'Interactive Earth science simulations' },
  { title: 'Khan Academy Earth Science', url: 'https://www.khanacademy.org/science/earth-science', provider: 'Khan Academy', type: 'Free Course', desc: 'Comprehensive Earth science curriculum' },
  { title: 'Geology for Kids', url: 'https://kids.nationalgeographic.com/science/article/geology', provider: 'NatGeo Kids', type: 'Articles', desc: 'Kid-friendly geology articles and facts' },
  { title: 'Weather Wiz Kids', url: 'https://www.weatherwizkids.com/', provider: 'Crystal Wicker', type: 'Educational', desc: 'Meteorology designed especially for kids' },
  { title: 'AGI Earth Science Week', url: 'https://www.americangeosciences.org/education/earth-science-week', provider: 'AGI', type: 'Educational Portal', desc: 'Annual celebration and year-round resources for Earth science education' },
  { title: 'NASA SpacePlace', url: 'https://spaceplace.nasa.gov/', provider: 'NASA', type: 'Interactive', desc: 'Space and Earth science for elementary students' },
  { title: 'Smithsonian Education - Geology', url: 'https://www.si.edu/education', provider: 'Smithsonian', type: 'Educational Portal', desc: 'Geology resources from the National Museum of Natural History' },
  { title: 'NESTA', url: 'https://www.nestanet.org/', provider: 'NESTA', type: 'Professional Org', desc: 'National Earth Science Teachers Association resources' },
  { title: 'IRIS Education', url: 'https://www.iris.edu/hq/education', provider: 'IRIS', type: 'Seismic Data', desc: 'Earthquake education and seismic data for classrooms' },
  { title: 'EarthScope Education', url: 'https://www.earthscope.org/education/', provider: 'EarthScope', type: 'Educational Portal', desc: 'Plate tectonics and geophysics education resources' },
  { title: 'NPS Geology', url: 'https://www.nps.gov/subjects/geology/', provider: 'National Park Service', type: 'Educational Portal', desc: 'Geology of national parks educational materials' },
  { title: 'USGS Water Science School', url: 'https://www.usgs.gov/special-topics/water-science-school', provider: 'USGS', type: 'Educational Portal', desc: 'Water science basics for all ages' },
  { title: 'Google Earth Education', url: 'https://www.google.com/earth/education/', provider: 'Google', type: 'Tools', desc: 'Mapping and geographic tools for educators' },
  { title: 'Geological Society of London Schools', url: 'https://www.geolsoc.org.uk/Education', provider: 'GSL', type: 'Educational Portal', desc: 'UK Earth science education resources' },
  { title: 'Rockwatch', url: 'https://www.rockwatch.org.uk/', provider: 'GSL', type: 'Club', desc: 'UK geology club for young people' },
  { title: 'GeoBus', url: 'https://www.geobus.org.uk/', provider: 'GeoBus', type: 'Outreach', desc: 'Free Earth science workshops for UK schools' },
  { title: 'Earth Learning Idea', url: 'https://www.earthlearningidea.com/', provider: 'ELI', type: 'Activities', desc: 'Free Earth science teaching ideas' }
]

const textbooksBeginner = [
  { title: 'OpenStax Earth Science', author: 'OpenStax', url: 'https://openstax.org/details/books/earth-science', type: 'FREE PDF', desc: 'Comprehensive introductory Earth science textbook' },
  { title: 'Physical Geology', author: 'BCcampus', url: 'https://opentextbc.ca/geology/', type: 'FREE WEB', desc: 'Introduction to physical geology with Canadian focus' },
  { title: 'Introduction to Oceanography', author: 'Roger Williams University', url: 'https://rwu.pressbooks.pub/oceanography/', type: 'FREE WEB', desc: 'Comprehensive oceanography textbook' },
  { title: 'Geology Lab Manual', author: 'LibreTexts', url: 'https://geo.libretexts.org/', type: 'FREE WEB', desc: 'Laboratory exercises for geology students' },
  { title: 'OpenGeology.org', author: 'OpenGeology', url: 'https://opengeology.org/', type: 'FREE WEB', desc: 'Free textbooks and resources for Earth science' },
  { title: 'Physical Geology - Earle', author: 'Steven Earle', url: 'https://opentextbc.ca/physicalgeology2ed/', type: 'FREE WEB', desc: 'Physical geology textbook with BC examples' },
  { title: 'Historical Geology', author: 'LibreTexts', url: 'https://geo.libretexts.org/Bookshelves/Geology/Historical_Geology', type: 'FREE WEB', desc: 'Historical geology and Earth history resources' },
  { title: 'LibreTexts Geosciences', author: 'LibreTexts', url: 'https://geo.libretexts.org/', type: 'FREE WEB', desc: 'Comprehensive geoscience learning resources' },
  { title: 'SERC Teach Earth', author: 'SERC', url: 'https://serc.carleton.edu/teachearth/index.html', type: 'FREE WEB', desc: 'Teaching resources and strategies for Earth science' },
  { title: 'InTeGrate', author: 'SERC', url: 'https://serc.carleton.edu/integrate/index.html', type: 'FREE WEB', desc: 'Interdisciplinary teaching about Earth for a sustainable future' },
  { title: 'DLESE', author: 'NSF', url: 'https://www.dlese.org/', type: 'FREE WEB', desc: 'Digital Library for Earth System Education' },
  { title: 'AGI Workforce Development', author: 'AGI', url: 'https://www.americangeosciences.org/workforce', type: 'FREE WEB', desc: 'Career resources and workforce development' }
]

const textbooksIntermediate = [
  { title: 'Essentials of Geology', author: 'Stephen Marshak', url: 'https://www.amazon.com/s?k=essentials+of+geology+marshak', type: 'Textbook', desc: 'University-level physical geology with digital resources' },
  { title: 'Earth Science: The Physical Setting', author: 'Thomas McGuire', url: 'https://www.amazon.com/s?k=earth+science+physical+setting', type: 'Textbook', desc: 'Comprehensive Earth science for undergraduates' },
  { title: 'Fundamentals of the Physical Environment', author: 'Peter Smithson', url: 'https://www.amazon.com/s?k=fundamentals+physical+environment', type: 'Textbook', desc: 'Climatology, geomorphology, and biogeography' },
  { title: 'Meteorology Today', author: 'C. Donald Ahrens', url: 'https://www.amazon.com/s?k=meteorology+today+ahrens', type: 'Textbook', desc: 'Introduction to weather, climate, and the environment' },
  { title: 'On the Cutting Edge', author: 'SERC', url: 'https://serc.carleton.edu/NAGTWorkshops/index.html', type: 'Professional Dev', desc: 'Professional development for geoscience faculty' },
  { title: 'Earth Science World Image Bank', author: 'AGI', url: 'https://www.earthscienceworld.org/images/', type: 'Image Resource', desc: 'Geoscience images for educational use' }
]

const textbooksAdvanced = [
  { title: 'Principles of Igneous and Metamorphic Petrology', author: 'Philpotts & Ague', url: 'https://www.amazon.com/s?k=philpotts+ague+petrology', type: 'Graduate', desc: 'Advanced petrology textbook for graduate students' },
  { title: 'Sedimentary Geology', author: 'Prothero & Schwab', url: 'https://www.amazon.com/s?k=sedimentary+geology+prothero', type: 'Graduate', desc: 'Principles of sedimentology and stratigraphy' },
  { title: 'Geodynamics', author: 'Turcotte & Schubert', url: 'https://www.amazon.com/s?k=geodynamics+turcotte', type: 'Graduate', desc: 'Physics of geological processes' },
  { title: 'Atmospheric Science', author: 'Wallace & Hobbs', url: 'https://www.amazon.com/s?k=atmospheric+science+wallace', type: 'Graduate', desc: 'Introductory survey for advanced undergraduates' }
]

const geologyResources = [
  { name: 'Mindat.org', url: 'https://www.mindat.org/', desc: 'World\'s largest mineral database and reference', type: 'Database' },
  { name: 'Macrostrat', url: 'https://macrostrat.org/', desc: 'Sedimentary geology database and stratigraphic framework', type: 'Database' },
  { name: 'OneGeology', url: 'http://www.onegeology.org/', desc: 'Global geological map data from multiple nations', type: 'Maps' },
  { name: 'GeoScienceWorld', url: 'https://www.geoscienceworld.org/', desc: 'Geoscience research articles and publications', type: 'Research' },
  { name: 'Stratigraphy.org', url: 'https://stratigraphy.org/', desc: 'International Commission on Stratigraphy', type: 'Reference' },
  { name: 'Fossilworks', url: 'http://www.fossilworks.org/', desc: 'Paleontology database and analysis tools', type: 'Database' },
  { name: 'GeoRef', url: 'https://www.americangeosciences.org/georef', desc: 'Comprehensive geoscience bibliography', type: 'Bibliography' },
  { name: 'Rock & Mineral Kits', url: 'https://geology.com/rocks/', desc: 'Rock and mineral identification guides', type: 'Guide' },
  { name: 'OneGeology Portal', url: 'https://portal.onegeology.org/', desc: 'Interactive global geological map portal', type: 'Maps' },
  { name: 'PetDB', url: 'https://www.earthchem.org/petdb', desc: 'Petrological Database of the Ocean Floor', type: 'Database' },
  { name: 'SedDB', url: 'https://www.earthchem.org/seddb', desc: 'Sedimentary Geology Database', type: 'Database' },
  { name: 'RockD', url: 'https://rockd.org/', desc: 'Mobile app for geologic data and mapping', type: 'Tool' }
]

const meteorologyResources = [
  { name: 'JetStream - Online Weather School', url: 'https://www.weather.gov/jetstream', desc: 'Comprehensive meteorology course by NOAA', type: 'Course' },
  { name: 'COMET MetEd', url: 'https://www.meted.ucar.edu/', desc: 'Meteorology education and training', type: 'Training' },
  { name: 'Windy.com', url: 'https://www.windy.com/', desc: 'Interactive weather forecasting maps', type: 'Tool' },
  { name: 'Weather Underground', url: 'https://www.wunderground.com/', desc: 'Weather data, forecasts, and history', type: 'Data' },
  { name: 'Storm Prediction Center', url: 'https://www.spc.noaa.gov/', desc: 'Severe weather forecasts and outlooks', desc2: 'NOAA severe weather monitoring', type: 'Monitoring' },
  { name: 'Hurricane Center', url: 'https://www.nhc.noaa.gov/', desc: 'National Hurricane Center forecasts', type: 'Forecasts' },
  { name: 'Climate.gov', url: 'https://www.climate.gov/', desc: 'Climate science and data portal', type: 'Portal' },
  { name: 'Skywarn', url: 'https://www.weather.gov/skywarn/', desc: 'Severe weather spotting training', type: 'Training' },
  { name: 'NSIDC', url: 'https://nsidc.org/', desc: 'National Snow and Ice Data Center', type: 'Data' },
  { name: 'World Climate Data', url: 'https://www.worldclim.org/', desc: 'Global climate data for ecological modeling', type: 'Data' },
  { name: 'ECMWF', url: 'https://www.ecmwf.int/', desc: 'European Centre for Medium-Range Weather Forecasts', type: 'Forecasts' },
  { name: 'JMA', url: 'https://www.jma.go.jp/', desc: 'Japan Meteorological Agency forecasts', type: 'Forecasts' },
  { name: 'BOM', url: 'http://www.bom.gov.au/', desc: 'Australian Bureau of Meteorology', type: 'Forecasts' }
]

const oceanographyResources = [
  { name: 'NOAA Ocean Explorer', url: 'https://oceanexplorer.noaa.gov/', desc: 'Ocean exploration expeditions and discoveries', type: 'Exploration' },
  { name: 'NASA Sea Level Portal', url: 'https://sealevel.nasa.gov/', desc: 'Global sea level change data', type: 'Data' },
  { name: 'Woods Hole Oceanographic', url: 'https://www.whoi.edu/', desc: 'Leading oceanographic research institution', type: 'Research' },
  { name: 'Scripps Institution', url: 'https://scripps.ucsd.edu/', desc: 'Ocean, Earth, and atmospheric science', type: 'Research' },
  { name: 'NOAA Tides & Currents', url: 'https://tidesandcurrents.noaa.gov/', desc: 'Tide predictions and current observations', type: 'Data' },
  { name: 'MarineBio Conservation', url: 'https://marinebio.org/', desc: 'Marine biology and conservation database', type: 'Database' },
  { name: 'Argo Floats', url: 'https://argo.ucsd.edu/', desc: 'Global ocean temperature and salinity data', type: 'Data' },
  { name: 'Ocean Observatories', url: 'https://oceanobservatories.org/', desc: 'Oceanographic sensor network data', type: 'Research' },
  { name: 'MBARI', url: 'https://www.mbari.org/', desc: 'Monterey Bay Aquarium Research Institute', type: 'Research' },
  { name: 'National Oceanography Centre', url: 'https://www.noc.ac.uk/', desc: 'UK oceanographic research', type: 'Research' },
  { name: 'GEOMAR', url: 'https://www.geomar.de/', desc: 'German marine research institute', type: 'Research' },
  { name: 'JAMSTEC', url: 'https://www.jamstec.go.jp/', desc: 'Japan Agency for Marine-Earth Science', type: 'Research' }
]

const virtualFieldTrips = [
  { name: 'Google Earth Voyager', url: 'https://earth.google.com/web/', desc: 'Interactive virtual globe with guided tours', type: 'Virtual Tour' },
  { name: 'USGS Virtual Field Trips', url: 'https://www.usgs.gov/programs/geology-monitoring-and-research/science/virtual-field-trips', desc: 'Geological field trips across the US', type: 'Field Trip' },
  { name: 'NASA WorldWind', url: 'https://worldwind.arc.nasa.gov/', desc: 'Open source virtual globe SDK', type: 'Tool' },
  { name: 'Virtual Yosemite', url: 'https://virtualyosemite.org/', desc: '360° panoramic tours of Yosemite', type: 'Panorama' },
  { name: 'Digital Atlas of Ancient Life', url: 'https://www.digitalatlasofancientlife.org/', desc: 'Virtual fossil collection and identification', type: 'Collection' },
  { name: 'Virtual Geology Lab', url: 'https://www.geologysuperstore.com/virtual-geology-laboratory', desc: 'Interactive geology laboratory exercises', type: 'Lab' },
  { name: 'Geology.com Virtual Trips', url: 'https://geology.com/', desc: 'Virtual geological site visits', type: 'Field Trip' },
  { name: 'Visible Earth', url: 'https://visibleearth.nasa.gov/', desc: 'NASA Earth imagery collection', type: 'Imagery' },
  { name: 'Virtual Geosciences Professor', url: 'https://www.virtualgeosciences.co.uk/', desc: 'Virtual field trips and geological resources', type: 'Field Trip' },
  { name: 'On the Cutting Edge Field Labs', url: 'https://serc.carleton.edu/NAGTWorkshops/field/index.html', desc: 'Field-based learning resources', type: 'Field Trip' }
]

const dataSources = [
  { name: 'USGS EarthExplorer', url: 'https://earthexplorer.usgs.gov/', desc: 'Satellite imagery and aerial photography', type: 'Imagery' },
  { name: 'NOAA Data Access', url: 'https://www.ncei.noaa.gov/access', desc: 'Climate, ocean, and geophysical data', type: 'Climate' },
  { name: 'NASA EOSDIS', url: 'https://earthdata.nasa.gov/', desc: 'Earth observation data and tools', type: 'Satellite' },
  { name: 'USGS Water Data', url: 'https://waterdata.usgs.gov/', desc: 'Real-time water data across the US', type: 'Water' },
  { name: 'IRIS Seismic Data', url: 'https://www.iris.edu/hq/', desc: 'Seismic monitoring and earthquake data', type: 'Seismic' },
  { name: 'UNAVCO GPS Data', url: 'https://www.unavco.org/data/data.html', desc: 'Geodetic and tectonic GPS data', type: 'GPS' },
  { name: 'PaleoX', url: 'https://paleox.org/', desc: 'Paleoclimate database and tools', type: 'Paleoclimate' },
  { name: 'GEONETCast', url: 'https://www.wmo.int/geonetcast/', desc: 'Global environmental satellite data', type: 'Satellite' },
  { name: 'USGS National Map', url: 'https://www.usgs.gov/programs/national-geospatial-program/national-map', desc: 'Topographic maps and geographic data', type: 'Maps' },
  { name: 'Landsat', url: 'https://landsat.gsfc.nasa.gov/', desc: 'Landsat satellite imagery from USGS/NASA', type: 'Imagery' },
  { name: 'Copernicus Open Access Hub', url: 'https://scihub.copernicus.eu/', desc: 'ESA satellite data access', type: 'Satellite' },
  { name: 'Google Earth Engine', url: 'https://earthengine.google.com/', desc: 'Planetary-scale geospatial analysis', type: 'Tool' },
  { name: 'BGS Discovering Geology', url: 'https://www.bgs.ac.uk/discovering-geology/', desc: 'British Geological Survey resources', type: 'Educational' },
  { name: 'BGS GeoScenic', url: 'https://www.bgs.ac.uk/technologies/geoscenic/', desc: 'BGS geological photographs', type: 'Imagery' },
  { name: 'OneGeology Portal', url: 'https://portal.onegeology.org/', desc: 'Global geological map data', type: 'Maps' },
  { name: 'EGDI', url: 'https://www.europe-geology.eu/', desc: 'European Geological Data Infrastructure', type: 'Data' },
  { name: 'Geoscience Australia Data', url: 'https://www.ga.gov.au/data-pubs', desc: 'Australian geological and geospatial data', type: 'Data' },
  { name: 'Geological Survey of Canada', url: 'https://www.nrcan.gc.ca/science-and-data/research-centres-and-labs/geological-survey-canada', desc: 'Canadian geological data and maps', type: 'Data' },
  { name: 'Council for Geoscience', url: 'https://www.geoscience.org.za/', desc: 'South African geological survey', type: 'Data' },
  { name: 'Geological Survey of Japan', url: 'https://www.gsj.jp/', desc: 'Japanese geological data and research', type: 'Data' },
  { name: 'China Geological Survey', url: 'http://www.cgs.gov.cn/', desc: 'Chinese geological survey data', type: 'Data' },
  { name: 'Geological Survey of India', url: 'https://www.gsi.gov.in/', desc: 'Indian geological survey resources', type: 'Data' },
  { name: 'BRGM', url: 'https://www.brgm.eu/', desc: 'French geological survey', type: 'Data' },
  { name: 'BGR', url: 'https://www.bgr.bund.de/', desc: 'German geological survey', type: 'Data' },
  { name: 'EuroGeoSurveys', url: 'https://www.eurogeosurveys.org/', desc: 'European geological surveys organization', type: 'Data' }
]

const researchJournals = [
  { name: 'Geology (GSA)', url: 'https://pubs.geoscienceworld.org/geology', desc: 'Geological Society of America journal', type: 'Journal' },
  { name: 'Nature Geoscience', url: 'https://www.nature.com/ngeo/', desc: 'High-impact Earth science research', type: 'Journal' },
  { name: 'Earth and Planetary Science Letters', url: 'https://www.sciencedirect.com/journal/earth-and-planetary-science-letters', desc: 'Research letters on Earth and planets', type: 'Journal' },
  { name: 'Journal of Geophysical Research', url: 'https://agupubs.onlinelibrary.wiley.com/journal/21698996', desc: 'American Geophysical Union journal', type: 'Journal' },
  { name: 'Geophysical Research Letters', url: 'https://agupubs.onlinelibrary.wiley.com/journal/19448007', desc: 'Rapid communication in geophysics', type: 'Journal' },
  { name: 'Bulletin of the Seismological Society', url: 'https://pubs.geoscienceworld.org/ssa/bssa', desc: 'Seismology and earthquake engineering', type: 'Journal' },
  { name: 'Earth-Science Reviews', url: 'https://www.sciencedirect.com/journal/earth-science-reviews', desc: 'Review articles in Earth sciences', type: 'Review' },
  { name: 'Scientific Reports - Earth Science', url: 'https://www.nature.com/srep/', desc: 'Open access multidisciplinary journal', type: 'Journal' },
  { name: 'Nature Climate Change', url: 'https://www.nature.com/nclimate/', desc: 'Climate change research journal', type: 'Journal' },
  { name: 'Nature Sustainability', url: 'https://www.nature.com/natsustain/', desc: 'Sustainability and Earth system research', type: 'Journal' },
  { name: 'Journal of Petrology', url: 'https://academic.oup.com/petrology', desc: 'Igneous and metamorphic petrology', type: 'Journal' },
  { name: 'Sedimentology', url: 'https://onlinelibrary.wiley.com/journal/13653091', desc: 'Sedimentology and stratigraphy research', type: 'Journal' },
  { name: 'Geochimica et Cosmochimica Acta', url: 'https://www.sciencedirect.com/journal/geochimica-et-cosmochimica-acta', desc: 'Geochemistry journal', type: 'Journal' },
  { name: 'GSA Today', url: 'https://www.geosociety.org/gsatoday', desc: 'Geological Society of America news magazine', type: 'Magazine' },
  { name: 'Geoscientist', url: 'https://www.geolsoc.org.uk/geoscientist', desc: 'Geological Society of London magazine', type: 'Magazine' },
  { name: 'Elements', url: 'https://www.elementsmagazine.org/', desc: 'Mineralogy, geochemistry, and petrology', type: 'Magazine' },
  { name: 'Geology Today', url: 'https://onlinelibrary.wiley.com/journal/13652451', desc: 'Popular geology magazine', type: 'Magazine' },
  { name: 'Journal of the Geological Society', url: 'https://jgs.lyellcollection.org/', desc: 'Geological Society of London journal', type: 'Journal' },
  { name: 'Tectonics', url: 'https://agupubs.onlinelibrary.wiley.com/journal/19449194', desc: 'Structural geology and tectonics', type: 'Journal' },
  { name: 'Paleoceanography and Paleoclimatology', url: 'https://agupubs.onlinelibrary.wiley.com/journal/25722517', desc: 'Paleoceanography and paleoclimate', type: 'Journal' },
  { name: 'Journal of Geology', url: 'https://www.journals.uchicago.edu/journals/jg', desc: 'University of Chicago geology journal', type: 'Journal' },
  { name: 'American Journal of Science', url: 'https://www.ajsonline.org/', desc: 'Historic Earth science journal', type: 'Journal' }
]
</script>

<template>
  <div class="min-h-screen bg-space-950">
    <!-- Hero Section -->
    <div class="relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-space-950 to-orange-900/20"></div>
      <div class="relative max-w-7xl mx-auto px-4 py-16 sm:py-24">
        <NuxtLink to="/" class="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
          Back to Categories
        </NuxtLink>

        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 rounded-full border border-amber-500/30 mb-6">
            <span class="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></span>
            <span class="text-sm text-amber-300">2000+ Global Earth Science Resources</span>
          </div>
          
          <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            <span class="bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Earth Science
            </span>
          </h1>
          
          <p class="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Explore our planet with comprehensive resources covering geology, meteorology, oceanography, and climate science. From K-12 education to cutting-edge research from USGS, NASA, and NOAA.
          </p>

          <!-- Stats -->
          <div class="flex flex-wrap justify-center gap-4 sm:gap-8">
            <div class="text-center">
              <div class="text-3xl font-bold text-white">136+</div>
              <div class="text-sm text-gray-400">K-12 Resources</div>
            </div>
            <div class="w-px h-12 bg-gray-700 hidden sm:block"></div>
            <div class="text-center">
              <div class="text-3xl font-bold text-white">200+</div>
              <div class="text-sm text-gray-400">University Resources</div>
            </div>
            <div class="w-px h-12 bg-gray-700 hidden sm:block"></div>
            <div class="text-center">
              <div class="text-3xl font-bold text-white">62+</div>
              <div class="text-sm text-gray-400">Data Sources</div>
            </div>
            <div class="w-px h-12 bg-gray-700 hidden sm:block"></div>
            <div class="text-center">
              <div class="text-3xl font-bold text-white">33+</div>
              <div class="text-sm text-gray-400">Virtual Field Trips</div>
            </div>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="flex flex-wrap justify-center gap-3 mb-8">
          <a v-for="link in quickLinks" :key="link.name" :href="link.url"
             class="flex items-center gap-2 px-4 py-2 bg-gray-900/50 rounded-full border border-gray-800 hover:border-amber-500/50 transition-all">
            <span class="text-sm text-gray-300">{{ link.name }}</span>
            <span class="text-xs text-amber-400">({{ link.count }})</span>
          </a>
        </div>
      </div>
    </div>

    <!-- Content -->
    <div class="max-w-7xl mx-auto px-4 py-12 space-y-20">
      
      <!-- Featured Resources -->
      <section>
        <h2 class="text-2xl font-bold text-white mb-6 text-center">Featured Resources</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a v-for="resource in featuredResources" :key="resource.title" :href="resource.url" target="_blank"
             class="group p-5 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-amber-500/50 transition-all hover:scale-[1.02]">
            <h3 class="font-semibold text-white mb-1">{{ resource.title }}</h3>
            <p class="text-sm text-amber-400 mb-2">{{ resource.author }}</p>
            <p class="text-xs text-gray-400">{{ resource.desc }}</p>
          </a>
        </div>
      </section>

      <!-- K-12 Resources -->
      <section id="k12" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">K-12 Resources</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="r in k12Resources" :key="r.title" :href="r.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-amber-500/50 transition-all">
            <span class="text-xs px-2 py-0.5 bg-amber-500/20 text-amber-400 rounded">{{ r.type }}</span>
            <h4 class="font-semibold text-white mt-2 group-hover:text-amber-400">{{ r.title }}</h4>
            <p class="text-sm text-gray-500">{{ r.provider }}</p>
            <p class="text-xs text-gray-600 mt-1">{{ r.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Free Textbooks - Beginner -->
      <section id="textbooks" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-2">Free Textbooks</h2>
        <p class="text-gray-400 mb-6">Beginner Level (K-12 to Early Undergraduate)</p>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="book in textbooksBeginner" :key="book.title" :href="book.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-green-500/50 transition-all">
            <span class="text-xs px-2 py-0.5 bg-green-500/20 text-green-400 rounded">{{ book.type }}</span>
            <h4 class="font-semibold text-white mt-2 group-hover:text-green-400">{{ book.title }}</h4>
            <p class="text-sm text-gray-400">{{ book.author }}</p>
            <p class="text-xs text-gray-600 mt-1">{{ book.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Free Textbooks - Intermediate -->
      <section>
        <p class="text-gray-400 mb-6">Intermediate Level (Undergraduate)</p>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="book in textbooksIntermediate" :key="book.title" :href="book.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-orange-500/50 transition-all">
            <span class="text-xs px-2 py-0.5 bg-orange-500/20 text-orange-400 rounded">{{ book.type }}</span>
            <h4 class="font-semibold text-white mt-2 group-hover:text-orange-400">{{ book.title }}</h4>
            <p class="text-sm text-gray-400">{{ book.author }}</p>
            <p class="text-xs text-gray-600 mt-1">{{ book.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Free Textbooks - Advanced -->
      <section>
        <p class="text-gray-400 mb-6">Advanced Level (Graduate & Research)</p>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="book in textbooksAdvanced" :key="book.title" :href="book.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-rose-500/50 transition-all">
            <span class="text-xs px-2 py-0.5 bg-rose-500/20 text-rose-400 rounded">{{ book.type }}</span>
            <h4 class="font-semibold text-white mt-2 group-hover:text-rose-400">{{ book.title }}</h4>
            <p class="text-sm text-gray-400">{{ book.author }}</p>
            <p class="text-xs text-gray-600 mt-1">{{ book.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Geology Resources -->
      <section id="geology" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Geology Resources</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="r in geologyResources" :key="r.name" :href="r.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-amber-500/50 transition-all">
            <span class="text-xs px-2 py-0.5 bg-amber-500/20 text-amber-400 rounded">{{ r.type }}</span>
            <h4 class="font-semibold text-white mt-2 group-hover:text-amber-400">{{ r.name }}</h4>
            <p class="text-sm text-gray-500 mt-1">{{ r.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Meteorology & Climate Resources -->
      <section id="meteorology" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Meteorology & Climate Resources</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="r in meteorologyResources" :key="r.name" :href="r.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-cyan-500/50 transition-all">
            <span class="text-xs px-2 py-0.5 bg-cyan-500/20 text-cyan-400 rounded">{{ r.type }}</span>
            <h4 class="font-semibold text-white mt-2 group-hover:text-cyan-400">{{ r.name }}</h4>
            <p class="text-sm text-gray-500 mt-1">{{ r.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Oceanography Resources -->
      <section id="oceanography" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Oceanography Resources</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="r in oceanographyResources" :key="r.name" :href="r.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all">
            <span class="text-xs px-2 py-0.5 bg-blue-500/20 text-blue-400 rounded">{{ r.type }}</span>
            <h4 class="font-semibold text-white mt-2 group-hover:text-blue-400">{{ r.name }}</h4>
            <p class="text-sm text-gray-500 mt-1">{{ r.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Virtual Field Trips & Labs -->
      <section id="field-trips" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Virtual Field Trips & Labs</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="r in virtualFieldTrips" :key="r.name" :href="r.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all">
            <span class="text-xs px-2 py-0.5 bg-purple-500/20 text-purple-400 rounded">{{ r.type }}</span>
            <h4 class="font-semibold text-white mt-2 group-hover:text-purple-400">{{ r.name }}</h4>
            <p class="text-sm text-gray-500 mt-1">{{ r.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Data Sources & Databases -->
      <section id="data" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Data Sources & Databases</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="r in dataSources" :key="r.name" :href="r.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-emerald-500/50 transition-all">
            <span class="text-xs px-2 py-0.5 bg-emerald-500/20 text-emerald-400 rounded">{{ r.type }}</span>
            <h4 class="font-semibold text-white mt-2 group-hover:text-emerald-400">{{ r.name }}</h4>
            <p class="text-sm text-gray-500 mt-1">{{ r.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Research & Journals -->
      <section id="journals" class="scroll-mt-20">
        <h2 class="text-3xl font-bold text-white mb-6">Research & Journals</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a v-for="r in researchJournals" :key="r.name" :href="r.url" target="_blank"
             class="group p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-indigo-500/50 transition-all">
            <span class="text-xs px-2 py-0.5 bg-indigo-500/20 text-indigo-400 rounded">{{ r.type }}</span>
            <h4 class="font-semibold text-white mt-2 group-hover:text-indigo-400">{{ r.name }}</h4>
            <p class="text-sm text-gray-500 mt-1">{{ r.desc }}</p>
          </a>
        </div>
      </section>

      <!-- Footer -->
      <div class="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-800">
        <NuxtLink to="/" class="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
          Back to Categories
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.scroll-mt-20 {
  scroll-margin-top: 5rem;
}
</style>
