‎// Register GSAP ScrollTrigger
‎gsap.registerPlugin(ScrollTrigger);
‎
‎// 1. Custom Cursor Movement
‎const cursor = document.querySelector("#cursor");
‎document.addEventListener("mousemove", (e) => {
‎    gsap.to(cursor, {
‎        x: e.clientX,
‎        y: e.clientY,
‎        duration: 0.1
‎    });
‎});
‎
‎// 2. Hero Section Animations
‎gsap.from(".hero-text", {
‎    y: 100,
‎    opacity: 0,
‎    duration: 1.5,
‎    ease: "power4.out"
‎});
‎
‎// 3. Section Reveal Animation (Scroll based)
‎gsap.utils.toArray(".section-reveal").forEach(section => {
‎    gsap.from(section, {
‎        scrollTrigger: {
‎            trigger: section,
‎            start: "top 80%",
‎        },
‎        y: 50,
‎        opacity: 0,
‎        duration: 1,
‎        ease: "power3.out"
‎    });
‎});
‎
‎// 4. Skills Card staggered animation
‎gsap.from(".skill-card", {
‎    scrollTrigger: {
‎        trigger: "#skills",
‎        start: "top 70%",
‎    },
‎    scale: 0.8,
‎    opacity: 0,
‎    stagger: 0.2,
‎    duration: 0.8,
‎    ease: "back.out(1.7)"
‎});
‎
‎// Cursor expansion on hover
‎const links = document.querySelectorAll('a, .glass');
‎links.forEach(link => {
‎    link.addEventListener('mouseenter', () => gsap.to(cursor, {scale: 3, background: 'rgba(0, 242, 255, 0.3)'}));
‎    link.addEventListener('mouseleave', () => gsap.to(cursor, {scale: 1, background: '#00f2ff'}));
‎});
‎