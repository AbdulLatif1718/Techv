/** @format */

import React, { useState } from 'react';
import OSInterface from "../OS/OSInterface";
import ModernLanding from "./ModernLanding";

const HomePageComponent = () => {
    const [isAdvancedMode, setIsAdvancedMode] = useState(false);

	return isAdvancedMode ? (
        <OSInterface onExit={() => setIsAdvancedMode(false)} />
    ) : (
        <ModernLanding onToggleAdvanced={() => setIsAdvancedMode(true)} />
    );
};

export default HomePageComponent;
