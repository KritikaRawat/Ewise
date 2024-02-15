import streamlit as st
import requests
import pandas as pd
import numpy as np
import json
import folium
from streamlit_folium import st_folium
from streamlit_lottie import st_lottie
from streamlit_lottie import st_lottie_spinner
from streamlit_extras.dataframe_explorer import dataframe_explorer


st.set_page_config(
    page_title="EWISE ",
    page_icon="♻️",
    layout="wide",
    initial_sidebar_state="expanded",
)
st.title("FIND NEAREST RECYCLING FACILITY ")
from datetime import datetime
import googlemaps

gmaps = googlemaps.Client(key='AIzaSyDZAvo3v6mDbEEvNPO_N_yRYAPZ_lKPpLM')

import math
import pandas as pd

def haversine(lat1, lon1, lat2, lon2):
    # Convert latitude and longitude from degrees to radians
    lat1, lon1, lat2, lon2 = map(math.radians, [lat1, lon1, lat2, lon2])

    # Haversine formula
    dlat = lat2 - lat1
    dlon = lon2 - lon1
    a = math.sin(dlat/2) ** 2 + math.cos(lat1) * math.cos(lat2) * math.sin(dlon/2) ** 2
    c = 2 * math.atan2(math.sqrt(a), math.sqrt(1-a))
    radius_of_earth = 6371  # Earth radius in kilometers. Use 3959 for miles.

    distance = radius_of_earth * c
    # return distance
    return round(distance,2)
@st.cache_resource
def load_data(file_name):
    df = pd.read_csv(file_name)
    return df

input_csv_file = 'output_data.csv'
df = load_data(input_csv_file)
@st.cache_data
def load_lottieurl(url: str):
    r = requests.get(url)
    if r.status_code != 200:
        return None
    return r.json()
with st.sidebar:
    # st.sidebar.markdown("### Filters")
    st.image("https://github.com/satyam0111/dice_app/assets/92117949/993084d2-ba3e-4158-81f1-2f315592d0f6",use_column_width="auto")
    st.title("Filters")
    show_data = st.checkbox("Show DataFrame")
    lottie_url_hello = load_lottieurl("https://github.com/KritikaRawat/Ewise/files/13711277/recycle.json")
    st_lottie(lottie_url_hello, width=300, height=300)

if show_data:
    filtered_df = dataframe_explorer(df)
    st.dataframe(filtered_df, use_container_width=True)
    # st.write(df)


address = st.text_input("Enter your address")
# address="Bennett University (Times of India Group"
pin = address  # Store the address in the pin variable
if address:
    autocomplete_results = gmaps.places_autocomplete(address)

    # Extract the suggested addresses from the autocomplete results
    suggestions = [result['description'] for result in autocomplete_results]

    # Display the autocomplete suggestions
    selected_address = st.selectbox("Select your address", suggestions)
    st.write("Selected address:", selected_address)
    pin = selected_address  # Store the selected address in the pin variable
pin = pin + " india"
geocode_result = gmaps.geocode(pin)
latitude = geocode_result[0]['geometry']['location']['lat']
longitude = geocode_result[0]['geometry']['location']['lng']

# Ensure that 'latitude' and 'longitude' are present in your DataFrame
if 'latitude' in df.columns and 'longitude' in df.columns:
    for i in range(len(df)):
        latitude2, longitude2 = df['latitude'][i], df['longitude'][i]

        # Now you can use latitude2 and longitude2 in your haversine function
        distance = haversine(latitude, longitude, latitude2, longitude2)

        # Do something with the calculated distance, e.g., add it to the DataFrame
        df.loc[i, 'distance'] = distance
else:
    st.error('Columns "latitude" and/or "longitude" not found in the DataFrame')
    st.write('Available columns:', df.columns)

# for i in range(len(df)):
#     latitude2, longitude2 = df['latitude'][i],df['longitude'][i]
#     # print(latitude2,longitude2)
#     df['distance']= haversine(latitude, longitude, latitude2, longitude2)

# Display the location on a map
m = folium.Map(location=[latitude,longitude], zoom_start=6)
# folium.Marker(
#     [latitude,longitude], popup="your location", tooltip="hear you are", icon=folium.Icon(color='green')
# ).add_to(m)
folium.Marker(
    [latitude,longitude], popup=st.link_button("go there","https://www.google.com/maps/place/17%C2%B042'11.8%22N+83%C2%B012'56.6%22E/"), tooltip="here you are", icon=folium.Icon(color='green')
).add_to(m)
# Loop through each row in the dataframe
for index, row in df.iterrows():
    latitude = row['latitude']
    longitude = row['longitude']
    name = row['name']
    distance=row['distance']
    # st.write(latitude,longitude,name)
    # Create a marker with tooltip
    folium.Marker(
        [latitude, longitude],
        popup=str(distance)+" km away",
        tooltip=name,
        # tooltip=round(df['distance'][i],3)),color='#0004ff'
    ).add_to(m)

# st.map(df, zoom=12, size=30, color='#0664ff')
# st.write(geocode_result)
st_data = st_folium(m, width=725)
