import React from 'react'

export const LoadingSpinner = () => {
    return (
        // Create a full screen overlay with a spinner
        <div className="loading-spinner">
            <div className="spinner"></div>
            <p>Loading...</p>
        </div>

    )
}
