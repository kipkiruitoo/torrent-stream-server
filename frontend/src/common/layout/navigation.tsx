import React, { useState } from 'react'
import { useGlobal } from 'reactn'
import { Link } from 'react-router-dom'
import { Collapse, Navbar, Container, Nav, FormCheck } from 'react-bootstrap'
import classnames from 'classnames'

import { getTheme, packageVersion } from '../../config'

export function TopNavigation(): JSX.Element {
    const [open, setOpen] = useState(false)
    const [theme, setTheme] = useGlobal('theme')

    return (
        <>
            
        </>
    )
}
