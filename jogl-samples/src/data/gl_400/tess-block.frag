#version 400 core

#define FRAG_COLOR		0

precision highp float;
precision highp int;
layout(std140, column_major) uniform;

layout(location = FRAG_COLOR, index = 0) out vec4 color;

in Block
{
    vec4 color;
} inBlock;

void main()
{
    color = inBlock.color;
}
