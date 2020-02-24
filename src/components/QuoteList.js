import React, { Component } from "react";
import Quote from "./Quote";

import { Query } from "react-apollo";
import gql from "graphql-tag";

const FEED_QUERY = gql`
    {
        feed {
            description
        }
    }
`

class QuoteList extends Component {
    render() {
        return (
            <div>
                <Query query={FEED_QUERY}>
                    {({ loading, error, data }) => {
                        if (loading) {
                            return <div>Loading...</div>
                        }

                        if (error) {
                            return <div>An error occured...</div>
                        }

                        const quoteList = data.feed;
                        return (
                            <div>
                                {quoteList.map((quote, index) => {
                                    return <Quote description={quote.description} />
                                })}
                            </div>
                        )
                    }}
                </Query>
            </div>
        )
    }
}

export default QuoteList;
