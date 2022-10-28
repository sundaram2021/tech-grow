import React from "react";
import "../CSS/project.css";
import Navbar from "../components/Navbar";
import { motion } from 'framer-motion';

export default function ProjectIOT() {
  return (
    <>
      <Navbar />
      <div className="project-iot">
        <motion.div
          initial = {{opacity : 0, scale: 0.9}}
          animate = {{opacity : 1, scale : 1}}
          transition = {{
            duration : 1.6
          }}
        >
          <div className="main-section">
            <h2>Smart Agriculture System</h2>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8A9xdddI3GUvYgB3488rMhxDzVQC_e-j-WQ&usqp=CAU"
              alt=""
            />
          </div>
          <h4>
            One of the best ideas to start experimenting you hands-on IoT
            projects for students is working on smart agriculture system. As the
            name suggests, this IoT-based project focuses on developing a smart
            agricultural system that can perform and even monitor a host of
            farming tasks. For instance, you can schedule the system to irrigate
            a piece of land automatically, or you can spray
            fertilizers/pesticides on the crops wirelessly through your
            smartphone. Not just that, this IoT-based project can also
            successfully monitor soil moisture through a moisture sensing
            system, which can work to detect dry soil. Such an advanced system
            can handle the routine agricultural tasks, thereby allowing farmers
            and cultivators to focus on more manual-intensive agricultural
            tasks. Learners can implement a similar IoT simulation project or
            IoT research topics to monitor house gardens or indoor plants that
            often go untended.
          </h4>
          <div>
            <strong>Sample : </strong>
            <a href="https://techatronic.com/smart-agriculture-using-iot">
              Smart Agriculture using Iot
            </a>
          </div>
        </motion.div>
        <motion.div
          initial = {{opacity : 0, scale: 0.9}}
          animate = {{opacity : 1, scale : 1}}
          transition = {{
            duration : 1.6
          }}
        >
          <div className="main-section">
            <h2>Weather Reporting system</h2>
            <img
              src="https://t4.ftcdn.net/jpg/05/21/39/53/240_F_521395303_ut3QmaY0tGJfWrkniGPaXKxeIFFQRre2.jpg"
              alt=""
            />
          </div>
          <h4>
            This is one of the excellent IoT project ideas for beginners. This
            IoT-based weather reporting system is specifically designed to
            facilitate the reporting of weather parameters over the Internet.
            This is one of the best IoT projects where the system is embedded
            with temperature, humidity, and rain sensors that can monitor the
            weather conditions and provide live reports of weather statistics.
            It is an always-on, automated system that sends data via a
            microcontroller to the webserver using a WIFI connection. This data
            is updated live on the online server system. So, you can directly
            check the weather stats online without having to rely on the reports
            of weather forecasting agencies. The system also allows you to set
            threshold values and alerts for specific instances and notifies
            users every time the weather parameters cross the threshold value. A
            few IoT projects for final year are aiming to evolve efficient usage
            of devices to reduce carbon footprint, which is a need of the hour.
            From consistent monitoring of carbon emissions to enforcing standard
            equipment and energy usage to operate under restricted levels, IoT’s
            role is evolving. Developers are leveraging smart technologies to
            maintain a consistent balance between nature and technology.
          </h4>
          <div>
            <strong>Sample : </strong>
            <a href="https://electronics-project-hub.com/iot-based-weather-monitoring...">
              Iot base weather Monitoring Sytem
            </a>
          </div>
        </motion.div>
        <motion.div
          initial = {{opacity : 0, scale: 0.9}}
          animate = {{opacity : 1, scale : 1}}
          transition = {{
            duration : 1.6
          }}
        >
          <div className="main-section">
            <h2>Air Pollution Monitoring System</h2>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRriZUccdP6iR8jw7Ao9bzaIlaQLfz66quBLg&usqp=CAU"
              alt=""
            />
          </div>
          <h4>
            One of the best ideas to start experimenting you hands-on IoT
            projects for students is working on Air pollution monitoring system.
            Air pollution is a menace in all parts of the world, and monitoring
            air pollution levels is a challenge that we’re facing. While
            traditional air pollution monitoring systems fail to monitor air
            pollution levels successfully and the contaminants, IoT-based air
            pollution monitoring systems can both monitor the level of air
            pollution in cities and save the data on web servers for future use.
            This smart air pollution monitoring system promotes a cost-efficient
            technique of determining air quality. The system is embedded with
            sensors that specially monitor five components of the Environmental
            Protection Agency’s Air Quality Index – ozone, carbon monoxide,
            sulfur dioxide, nitrous oxide, and particulate matter. Plus, the
            system also includes a gas sensor that can alert users in case of
            gas leaks or the presence of flammable gases. Apart from this,
            there’s also a temperature and humidity sensor.
          </h4>
          <div>
            <strong>Sample : </strong>
            <a href="https://www.manxtechgroup.com/monitoring-air-pollution-with-iot">
              Monitoring air pollution with internet of things
            </a>
          </div>
        </motion.div>
        <motion.div
          initial = {{opacity : 0, scale: 0.9}}
          animate = {{opacity : 1, scale : 1}}
          transition = {{
            duration : 1.6
          }}
        >
          <div className="main-section">
            <h2>Smart Traffic Management System</h2>
            <img
              src="https://www.shutterstock.com/image-photo/social-infrastructure-communication-technology-concept-600w-1174864582.jpg"
              alt=""
            />
          </div>
          <h4>
            As the population increases, the number of vehicles plying on the
            road also increases inevitably. Due to the ever-increasing number of
            both public and private cars in cities and metropolitan areas,
            traffic congestion has become an everyday problem. One of the needed
            and best IoT projects. To combat this problem, this IoT-based
            project creates a smart traffic management system that can
            effectively manage traffic on roads, and offer free pathways to
            emergency vehicles like ambulance and fire trucks. Emergency
            vehicles can connect to this smart system and find signals and
            pathways where the traffic flow can be controlled dynamically. It
            flashes a green notification light for emergency vehicles. Also,
            this intelligent traffic management system can identify and monitor
            traffic violators even at night.
          </h4>
          <div>
            <strong>Sample : </strong>
            <a href="https://www.ijert.org/iot-based-smart-traffic-management-system">
              Iot based Smart Traffic management system
            </a>
          </div>
        </motion.div>
        <motion.div
          initial = {{opacity : 0, scale: 0.9}}
          animate = {{opacity : 1, scale : 1}}
          transition = {{
            duration : 1.6
          }}
        >
          <div className="main-section">
            <h2>Smart parking system</h2>
            <img src={require("../assets/smart-parking.jpg")} alt="" />
          </div>
          <h4>
            With cities and urban areas getting crowded by the minute, finding a
            parking space is nothing short of a challenge. It is not only
            time-consuming but also quite frustrating. Thanks to IoT, there’s a
            solution for solving the parking problem crisis. This IoT-based
            smart parking system is designed to avoid unnecessary travelling and
            harassment in the search for an appropriate parking area. This is an
            excellent IoT projects for beginners. So, if you are at a parking
            space, this system uses an IR sensor to monitor the entire area
            during the run time and provide you an image for the same. This
            allows you to see any free spaces in the parking lot and drive
            straight to it without wasting any time in looking for a parking
            space. Also, the system is tuned to open the car gate n only if
            there are empty slots available in a parking space.
          </h4>
          <div>
            <strong>Sample : </strong>
            <a href="https://www.mokosmart.com/smart-parking-system-using-iot/">
              Smart parking system using IOT
            </a>
          </div>
        </motion.div>
      </div>
    </>
  );
}
