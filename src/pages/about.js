import { graphql } from "gatsby"
import React from "react"

import ReactMarkdown from "react-markdown"

import Layout from "../components/layout"
import "../style/About.scss"



const AboutPage = ({ data }) => {
    const info = data.staticTextYaml
    return (
        <Layout windowLoc="about">
            <div className="grid">
                <div className={`full nutshell`}>
                    <h2>In a nutshell</h2>
                    <ReactMarkdown>{info.intro}</ReactMarkdown>
                    {/* <section dangerouslySetInnerHTML={{__html: info.intro.html}}></section> */}
                </div>
                <div className="left">
                    <h2>Present</h2>
                    <ReactMarkdown>{info.present}</ReactMarkdown>
                </div>
                <div className={"right"}>
                    <h2>Past</h2>
                    <ul className={"past"}>
                        {
                            info.past.map((item, i) => {
                                return <li key={`about-list-${i}`}><ReactMarkdown>{item}</ReactMarkdown></li>
                            })
                        }
                    </ul>
                </div>
            </div>
        </Layout>
    )
}

export const pageQuery = graphql`
    query aboutPage {
        staticTextYaml {
            intro
            present
            past
        }
    }
`

export default AboutPage