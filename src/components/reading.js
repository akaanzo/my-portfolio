import React from 'react'

import TwoColumns from 'components/twoColumns'
import SectionHeading from 'components/sectionHeading'

function Reading() {
    return (
        <TwoColumns
            wide
            leftColumn={<SectionHeading>Interesting Reading</SectionHeading>}
            rightColumn={
                <p>
                    <ul>Lorem Ipsum</ul>
                    <ul>test</ul>
                </p>
            }
        />
    )
}

export default Reading