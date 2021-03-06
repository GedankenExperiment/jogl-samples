#version 420 core

#include fbo-texture-2d.glsl

precision highp float;
precision highp int;
layout(std140, column_major) uniform;

layout(binding = DIFFUSE) uniform sampler2D diffuse;

in Block
{
    vec2 texCoord;
} inBlock;

layout(location = FRAG_COLOR, index = 0) out vec4 color;

void main()
{
#ifdef FLAT_COLOR
    color = vec4(0.0, 0.5, 1.0, 1.0);
#else
    color = texture(diffuse, inBlock.texCoord.st);
#endif
}
