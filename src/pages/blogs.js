import React from "react"
import { graphql } from "gatsby"

export default ({ data }) => {
    return (
        <div>
            <h1>Blog Posts</h1>
            <table>
                <thead>
                    <tr>
                        <th>absolutePath</th>
                        <th>prettySize</th>
                        <th>extension</th>
                        <th>birthTime</th>
                    </tr>
                </thead>
                <tbody>
                    {data.allFile.edges.map(({node}, index) => (
                        <tr key={index}>
                            <th>{node.absolutePath}</th>
                            <th>{node.prettySize}</th>
                            <th>{node.extension}</th>
                            <th>{node.birthTime}</th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export const query = graphql`
    query {
        allFile {
            edges {
                node {
                    absolutePath
                    prettySize
                    extension
                    birthTime
                }
            }
        }
    }
`