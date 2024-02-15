
import streamlit as st
import webbrowser
from streamlit_lottie import st_lottie
from streamlit_lottie import st_lottie_spinner
import requests

st.set_page_config(
    page_title="EWISE ",
    page_icon="♻️",
    layout="wide",
    initial_sidebar_state="expanded",
)
def reset_values():
    st.session_state.num = 0
    st.session_state.total_yes_weight = 0
    st.session_state.total_no_weight = 0

if 'num' not in st.session_state:
    st.session_state.num = 0
if 'total_yes_weight' not in st.session_state:
    st.session_state.total_yes_weight = 0.0
if 'total_no_weight' not in st.session_state:
    st.session_state.total_no_weight = 0.0

# st.write(st.session_state) 
st.title("Electronic Device Assessment")
@st.cache_data
def load_lottieurl(url: str):
    r = requests.get(url)
    if r.status_code != 200:
        return None
    return r.json()
lottie_url_hello = load_lottieurl("https://github.com/KritikaRawat/Ewise/files/13711277/recycle.json")


ct=st.container()

questions = {
        "Television/Monitor": [
            "Is the television/monitor relatively new (less than 3 years old)?",
            "Is the issue common and easily repairable (e.g., loose connection, minor software glitch)?",
            "Are replacement parts readily available in the market?",
            "Does the manufacturer still provide support or offer repair services?",
            "Will the cost of repairs be significantly lower than the current market value?",
            "Is the television/monitor made with environmentally friendly materials?",
            "Do you have the skills or expertise to attempt a DIY repair?",
            "Is the television/monitor still under warranty?",
            "Is the television/monitor critical for daily tasks or work?",
            "Can the television/monitor be easily upgraded to meet current performance standards?"
        ],
        "Fridge": [
            "Is the fridge relatively new (less than 3 years old)?",
            "Is the issue common and easily repairable (e.g., thermostat, door seal)?",
            "Are replacement parts readily available in the market?",
            "Does the manufacturer still provide support or offer repair services?",
            "Will the cost of repairs be significantly lower than the current market value?",
            "Is the fridge made with environmentally friendly materials?",
            "Is the fridge still under warranty?",
            "Is the fridge critical for daily tasks or work?",
            "Can the fridge be easily upgraded to meet current performance standards?"
        ],
        "Washing Machine": [
            "Is the washing machine relatively new (less than 3 years old)?",
            "Is the issue common and easily repairable (e.g., pump, belt)?",
            "Are replacement parts readily available in the market?",
            "Does the manufacturer still provide support or offer repair services?",
            "Will the cost of repairs be significantly lower than the current market value?",
            "Is the washing machine made with environmentally friendly materials?",
            "Is the washing machine still under warranty?",
            "Is the washing machine critical for daily tasks or work?",
            "Can the washing machine be easily upgraded to meet current performance standards?"
        ],
        "Iron": [
            "Is the iron relatively new (less than 3 years old)?",
            "Is the issue common and easily repairable (e.g., faulty cord, heating element)?",
            "Are replacement parts readily available in the market?",
            "Does the manufacturer still provide support or offer repair services?",
            "Will the cost of repairs be significantly lower than the current market value?",
            "Is the iron made with environmentally friendly materials?",
            "Is the iron still under warranty?",
            "Is the iron critical for daily tasks or work?",
            "Can the iron be easily upgraded to meet current performance standards?"
        ],
        "Oven": [
            "Is the oven relatively new (less than 3 years old)?",
            "Is the issue common and easily repairable (e.g., heating element, thermostat)?",
            "Are replacement parts readily available in the market?",
            "Does the manufacturer still provide support or offer repair services?",
            "Will the cost of repairs be significantly lower than the current market value?",
            "Is the oven made with environmentally friendly materials?",
            "Is the oven still under warranty?",
            "Is the oven critical for daily tasks or work?",
            "Can the oven be easily upgraded to meet current performance standards?"
        ]
    }

metal = {
        "Television/Monitor": [
            "1.27Kg",
            "2168g",
            "920g"
        ],
        "Fridge": [
            "1.26Kg",
            "1420g",
            "1530g"
        ],
        "Washing Machine": [
            "10.7Kg",
            "2168g",
            "920g"
        ],
        "Iron": [
            "sadbfhk", 
            "dk",
           "dghaeiu"
        ],
        "Oven": [
            "dk",
            "dk",
            "dghaeiu"
        ],
    }
weights = {
    "Television/Monitor_Q0": (0.7, 0.4),
    "Television/Monitor_Q1": (0.8, 0.2),
    "Television/Monitor_Q2": (0.5, 0.6),
    "Television/Monitor_Q3": (0.6, 0.4),
    "Television/Monitor_Q4": (0.8, 0.2),
    "Television/Monitor_Q5": (0.8, 0.8),
    "Television/Monitor_Q6": (0.6, 0.4),
    "Television/Monitor_Q7": (0.5, 0.5),
    "Television/Monitor_Q8": (0.8, 0.2),
    "Television/Monitor_Q9": (0.5, 0.7),
    "Television/Monitor_Q10": (0.6, 0.4),

}

def main(category):
    if st.button("RESET"):
        reset_values()
    with ct.form("my_form"):
        col1, col2 = st.columns(2)
        
        
        col1.title(f":rainbow[♻️EWISE]")
        col1.caption('Be wise, turn e-waste into cash with EWISE!')
        with st.sidebar:
            st_lottie(lottie_url_hello, width=300, height=300)
        col2.subheader("        ")
        cct=st.container()
        num=st.session_state.num

        if st.session_state.num +1< (len(questions[category])):
            # st.header(questions[category][st.session_state.num])
            # st.write(st.session_state.num)
            weight_yes, weight_no = weights.get(f"Television/Monitor_Q{st.session_state.num}", (1.0, 1.0))
            if st.form_submit_button('  YES  '):
                st.session_state.total_yes_weight += weight_yes
                st.session_state.num += 1
            if st.form_submit_button('   NO   '):
                st.session_state.total_no_weight += weight_no
                st.session_state.num += 1
            # col2.write(f"Plastic: {metal[category][0]}")
            # col2.write(f"Aluminium: {metal[category][1]}")
            # col2.write(f"Copper: {metal[category][2]}")
            # col2.write(f"Total YES Weight: {st.session_state.total_yes_weight}")
            # col2.write(f"Total NO Weight: {st.session_state.total_no_weight}")
            cct.header(questions[category][st.session_state.num])            # cct.header(questions[category][1])
            # st.write(st.session_state.num)
            weight_yes, weight_no = weights.get(f"Television/Monitor_Q{st.session_state.num}", (1.0, 1.0))
            num=st.session_state.num
            # st.write(weight_yes)
            # st.write(weight_no)
            st.write(f"{st.session_state.num +1} / {len(questions[category])}")
            st.link_button("SKIP Ahead", "http://localhost:3000/selectitems")

        else:
            weight_yes, weight_no = weights.get(f"Television/Monitor_Q{st.session_state.num+1}", (1.0, 1.0))
            
            # Display the result after the last question
            st.session_state.total_no_weight+=weight_no
            result = "🔧 Repair" if st.session_state.total_yes_weight > st.session_state.total_no_weight else "♻️ Recycle"
            st.title(result)
            st.success(f":rainbow[Recommended decision for the Television/Monitor: {result}]")

            if result == "♻️ Recycle":
                st.link_button("Have Something To Sell ?", "http://localhost:3000/selectitemsrecycle")
            else:
                st.link_button("Have Something To Sell ?", "http://localhost:3000/selectitems")

            ix = st.form_submit_button('  MAGIC  ')
            if ix:
                st.snow()

    
    # ct.write(st.session_state) 



if __name__ == "__main__":

    categories = ["Television/Monitor", "Fridge", "Washing Machine", "Iron", "Oven", "Battery (Recycle)"]
    # img=st.markdown("[![Foo](https://github.com/KritikaRawat/Ewise/files/13711277/recycle.json)](http://google.com.au/)")
    st.sidebar.image("https://github.com/satyam0111/dice_app/assets/92117949/993084d2-ba3e-4158-81f1-2f315592d0f6",use_column_width="auto")
    selected_category = st.sidebar.selectbox("Choose a category", categories)
    if selected_category != "Battery (Recycle)":
        main(selected_category)
        

    else:
        st.success(f":rainbow[The recommended decision for the Battery is to Recycle.]")
        st.link_button("Have Something To Sell ?", "http://localhost:3000/selectitems")
        st.snow()