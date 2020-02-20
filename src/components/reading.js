import React from 'react'

import TwoColumns from 'components/twoColumns'
import SectionHeading from 'components/sectionHeading'

function Reading() {
    return (
        <TwoColumns
            wide
            leftColumn={<SectionHeading>Interesting Reading</SectionHeading>}
            rightColumn={
                <span>
                    <ol>Lorem Ipsum</ol>
                    <ol>test</ol>
                </span>
            }
        />
    )
}

export default Reading