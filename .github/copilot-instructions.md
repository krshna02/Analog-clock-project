# AI Agent Instructions for Analog Clock Project

## Project Overview
This is a simple analog clock implementation using HTML, CSS, and JavaScript. The clock displays hours, minutes, and seconds hands that rotate in real-time.

## Key Components

### HTML Structure (`index.html`)
- Single container `#clockcontainer` with three child divs for clock hands:
  - `#hour`: Hour hand
  - `#minute`: Minute hand
  - `#seconds`: Second hand

### CSS Implementation (`index.css`)
- Clock hands use absolute positioning within the container
- Each hand has specific styling with:
  - Different dimensions (width/height) for visual hierarchy
  - Transform-origin set to bottom for proper rotation
  - Varying opacity levels for visual depth
  - Clock background expects an image file named `gg.jpg`

### JavaScript Logic (`index.js`)
- Uses `setInterval` with 1000ms (1 second) updates
- Hand rotation calculations:
  - Hour hand: `30 * hours + minutes/2` degrees
  - Minute hand: `6 * minutes` degrees
  - Second hand: `6 * seconds` degrees

## Development Patterns
- All UI components are positioned relative to the clock container
- Clock hands rotate using CSS transforms
- Time updates happen every second using JavaScript's `Date` object

## Asset Requirements
- Project requires a clock face image named `gg.jpg` in the root directory
- Image should be square for proper display (container is set to 40vw × 40vw)

## Testing
- Visual testing recommended in different viewport sizes
- Clock container is responsive (40vw width and height)
- Test across browsers to ensure transform animations work correctly